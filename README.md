# 배송 현황 카드 컴포넌트

물류 운영팀 내부 대시보드용 배송 현황 모니터링 UI. 하루 수백~수천 건 배송 건을 빠르게 스캔, 이상 건을 즉각 식별하는 것이 핵심 목표.

---

## 데모

https://kys0017.github.io/delivery-status-card/

---

## 작업 방식

실무 과제 가이드라인에서 추출한 요구사항([`docs/requirements-prompt.md`](docs/requirements-prompt.md))을 바탕으로 Claude Code로 구현. 스택 설정을 제외한 컴포넌트 설계, 스타일링, 리팩터링, README 작성 등 전 과정을 Claude Code와의 대화로 진행. UI를 직접 확인하며 필요한 부분을 수정, 변경이 생길 때마다 README를 즉시 현행화.

별도 디자인 시안 없이 구현을 선행한 뒤 UI를 사후 문서화. 와이어프레임·컴포넌트 상태 명세 등 디자인 문서는 구현 결과를 기반으로 정리한 UI 명세이며, [claude.ai/design](https://claude.ai/design)으로 생성.

---

## 스택

| 분류 | 기술 |
|------|------|
| 프레임워크 | React 19 + TypeScript |
| 빌드 | Vite 8 (Node 22+ 필요) |
| 라우팅 | TanStack Router v1 (파일 기반, `routeTree.gen.ts` 자동 생성) |
| 스타일 | Tailwind CSS v4 (`@tailwindcss/vite` 플러그인, 설정 파일 없음) |
| 아이콘 | lucide-react |
| 경로 별칭 | `@/` → `src/` |

---

## 실행 방법

```bash
# Node.js 22+ 필요
nvm use 22
npm install
npm run dev   # http://localhost:5173
npm run deploy  # GitHub Pages 배포
```

---

## 디자인 결정 사항

### 컴포넌트 구조 분리

```
routes/
  index.tsx      — Route 설정만 담당 (loader, pendingComponent, validateSearch, component 연결)
components/
  Dashboard/
    DashboardPage     — 대시보드 페이지 + 필터 상태(URL search params) 관리
    PendingDashboard  — 로딩 중 스켈레톤 화면
  DeliveryCard/
    StatusBadge    — 상태 표시 배지 (단일 책임, 재사용 가능)
    Timeline       — 배송 단계 시각화 (복잡도 분리)
    DeliveryCard   — 카드 컨테이너 + 확장 로직
  DeliveryList/
    DeliveryFilter — 필터 탭 (카운트 표시 포함)
    DeliveryList   — 목록 렌더링 (filter prop을 외부에서 수신)
  Skeleton/
    DeliveryCardSkeleton — 카드 로딩 플레이스홀더 (animate-pulse)
```

**StatusBadge를 별도 파일로 분리한 이유**: 상태 배지는 카드 외에 목록 헤더, 상세 페이지 등 여러 곳에서 쓰일 가능성이 높음. 컴포넌트 교체나 디자인 변경 시 단일 파일만 수정하면 되도록 미리 분리.

**Timeline을 분리한 이유**: 타임라인 렌더링 로직(단계 인덱스 계산, 지연/반송 분기)이 카드 자체 로직과 성격이 다름. 카드 파일에 인라인으로 뒀다면 두 관심사가 섞여 수정 시 영향 범위 추적이 어려워짐.

**라우트 파일에서 페이지 컴포넌트를 분리한 이유**: `routes/index.tsx`가 `Route`와 컴포넌트(`PendingDashboard`, `DashboardPage`)를 함께 export하면 Vite Fast Refresh가 컴포넌트 상태를 보존하지 못함(`react-refresh/only-export-components` 경고). 라우트 파일은 라우트 설정만 export하도록 분리, 실제 페이지 컴포넌트는 `components/Dashboard/`로 이동.

### 인터랙션: Inline Expand 선택

Accordion 방식 선택 이유는 운영 환경의 특성. 모달은 오버레이 레이어와 포커스 트랩 관리가 필요하고, 작업자가 여러 건을 빠르게 비교할 때 모달을 열고 닫는 동작이 반복되면 인지 피로 누적. Inline Expand는 목록 위치 컨텍스트를 유지한 채 상세 정보를 확인할 수 있어 빠른 스캔 흐름에 적합.

### 상태 관리 방식

전역 상태 라이브러리 없이 `useState`와 `useMemo`만 사용. 현재 요구사항이 목록 렌더링, 필터링, 카드 확장 세 가지뿐이라 컴포넌트 로컬 상태로 충분. 카드 각각의 확장 상태를 상위로 끌어올리지 않은 이유는 두 카드가 동시에 열려도 문제 없고, 카드 간 상태 동기화가 필요한 기능이 없기 때문.

필터 상태는 TanStack Router의 URL search params(`?status=DELAYED`)로 관리. 컴포넌트 내부 `useState`와 달리 브라우저 뒤로가기로 이전 필터를 복원할 수 있고, URL 공유 시 동일한 필터 뷰가 재현. `DeliveryList`는 필터 로직을 갖지 않고 `filter` prop을 수신해 렌더링만 담당.

초기 데이터 로딩은 TanStack Router의 `loader` + `pendingComponent` 패턴으로 처리. `useEffect` + `useState`로 로딩 상태를 수동 관리하는 대신, 라우터가 `loader` 완료 전까지 `PendingDashboard`(스켈레톤 UI)를 자동으로 렌더링하고 완료 시 실제 컴포넌트로 교체. 데이터는 `getRouteApi('/').useLoaderData()`로 수신해 prop drilling 없이 컴포넌트에서 직접 사용. `Route.useLoaderData()` 대신 `getRouteApi`를 쓰는 이유는 `DashboardPage`가 `routes/index.tsx`가 아닌 별도 파일에 있기 때문 — `Route`를 직접 import하면 라우트 파일과 페이지 컴포넌트 파일이 서로를 참조하는 순환 의존성이 발생하는데, `getRouteApi(routeId)`는 라우트 ID로 런타임에 훅을 바인딩해 이를 방지.

### 색상 및 타이포그래피

| 상태   | 색상 선택 근거 |
|--------|---------------|
| 배송 준비 중 | Slate(중립) — 아직 이동 없음, 주목도 낮게 |
| 배송 중 | Blue — 진행 중인 작업의 표준 색상, 안정감 |
| 배송 완료 | Emerald — 성공/완료의 긍정 신호 |
| 배송 지연 | Orange — Red보다 덜 위급하지만 주목 필요. 지연은 치명적 오류가 아닌 경고 |
| 반송 | Red — 수취 실패, 처리 필요한 예외 상황 |

지연 건에는 카드 상단에 주황 배너를 별도로 추가. 배지 색상만으로는 목록을 빠르게 훑을 때 놓칠 수 있어, 눈에 띄는 배너로 운영자의 즉각적인 주의를 유도.

타이포그래피는 Tailwind 기본 시스템 폰트 스택 그대로 사용. 대시보드 환경에서 웹폰트 로딩은 성능 비용 대비 이점이 적음.

---

## 트레이드오프

### 구현하지 못한 것

- **실시간 업데이트**: 폴링이나 WebSocket 연결 없이 정적 목 데이터만 사용. 실제 운영 환경이라면 `loader`를 실제 API 호출로 교체하고 `useQuery` + 폴링 간격 설정 필요.
- **가상화(Virtualization)**: 수천 건 목록을 렌더링할 경우 `react-window` 또는 TanStack Virtual 필요. 현재는 8건이라 불필요했지만, 스케일업 시 첫 번째 병목.
- **정렬**: 상태 필터만 있고 ETA 기준 정렬 등은 미구현. 운영 현장에서는 지연 건을 상단에 고정하는 정렬이 실용적.
- **키보드 네비게이션**: 카드 확장 토글에 `aria-expanded`와 포커스 관리를 추가했지만, 목록 수준의 키보드 탐색(위/아래 화살표)은 미구현.

### 개선 방향

1. `STATUS_CONFIG`의 Tailwind 클래스 문자열을 CSS 변수나 `cva` (class-variance-authority)로 전환하면 동적 스타일 조합 시 타입 안전성 향상.
2. 타임라인 이벤트 이력을 상세 영역에 스크롤 가능한 로그 형태로 표시하면 운영팀의 문제 추적에 활용 가능.
3. 지연 건에 대한 에스컬레이션 액션(담당자 알림, 메모 추가)을 확장 영역 내 CTA로 제공하면 대시보드를 read-only에서 액션 도구로 격상 가능.

---

## 어려웠던 점

### 타임라인 단계와 배송 상태의 매핑

배송 상태(5가지)와 타임라인 단계(3단계 선형 흐름)는 1:1 대응이 아님. `배송 지연`은 `배송 중` 단계에 머물러 있는 예외 상태이고, `반송`은 배송 중 어느 시점에서든 발생 가능. `TIMELINE_STEP_INDEX` 상수로 각 상태가 타임라인에서 어느 인덱스에 위치하는지 분리 정의. 타임라인 컴포넌트 내부에 분기 로직을 하드코딩하지 않고, 상수를 조회해 렌더링 변형을 결정하도록 구성 → 상태 추가 시 상수 파일만 수정.

### Tailwind v4와 동적 클래스 조합

Tailwind v4는 빌드 시 사용된 클래스를 정적 분석으로 추출. `STATUS_CONFIG`에서 상태별 클래스 문자열을 관리하면서 런타임에 조합할 경우, 분석기가 클래스를 누락할 위험. 이를 피하기 위해 클래스 문자열을 항상 **완전한 형태**(`text-blue-600`, `bg-blue-50`)로 상수에 저장, 템플릿 리터럴 안에서 동적으로 조각 붙이는 방식(`text-${color}-600`)은 미사용.
