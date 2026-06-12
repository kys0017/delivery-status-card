# CLAUDE.md

## 협업 규칙

- **소스 파일 수정 전 반드시 구현 계획을 먼저 제안하고 피드백을 받을 것.**
  파일 생성/편집 전에 "무엇을, 어떻게 바꿀 것인지" 텍스트로 먼저 설명한다.

## 프로젝트 개요

물류 운영팀 내부 대시보드. 하루 수백~수천 건 배송 현황 모니터링.
빠른 상태 인식과 이상 건 식별이 핵심 목적.

## 스택

- React 19 + TypeScript + Vite 8 (Node 22+ 필요)
- TanStack Router v1 (파일 기반 라우팅, routeTree.gen.ts 자동 생성)
- Tailwind CSS v4 (`@tailwindcss/vite` 플러그인, tailwind.config 없음)
- lucide-react (아이콘)
- 경로 별칭: `@/` → `src/`

## 핵심 설계 원칙

- 상태 상수는 `src/constants/delivery.ts`의 `STATUS_CONFIG`에서 중앙 관리
  (색상 클래스는 완전한 형태로 — Tailwind v4 정적 분석 대응)
- 스타일링: Tailwind CSS만 사용 (styled-components 사용 안 함)
- 불필요한 리렌더링 방지: 순수 표시 컴포넌트는 `memo` 적용

## 배송 상태 (5가지)

`PREPARING` / `IN_TRANSIT` / `DELIVERED` / `DELAYED` / `RETURNED`

## 실행

```bash
nvm use 22
npm run dev   # http://localhost:5173
```
