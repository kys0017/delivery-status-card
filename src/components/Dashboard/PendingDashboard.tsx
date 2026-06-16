import { DeliveryCardSkeleton } from '@/components/Skeleton/DeliveryCardSkeleton';

export function PendingDashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <h1 className="text-lg font-bold text-slate-900">배송 현황 대시보드</h1>
          <p className="text-xs text-slate-400 mt-0.5">로딩 중…</p>
        </div>
        <div className="max-w-3xl mx-auto px-4 pb-3 flex gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-8 w-20 rounded-full bg-slate-100 animate-pulse shrink-0" />
          ))}
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-4 py-6">
        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <DeliveryCardSkeleton key={i} />
          ))}
        </div>
      </main>
    </div>
  );
}
