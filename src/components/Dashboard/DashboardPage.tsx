import { getRouteApi } from '@tanstack/react-router';
import { useCallback, useMemo } from 'react';
import { DeliveryList } from '@/components/DeliveryList/DeliveryList';
import { DeliveryFilter } from '@/components/DeliveryList/DeliveryFilter';
import { ALL_STATUSES } from '@/constants/delivery';
import type { DeliveryStatus } from '@/types/delivery';

type FilterValue = DeliveryStatus | 'ALL';

const routeApi = getRouteApi('/');

export function DashboardPage() {
  const deliveries = routeApi.useLoaderData();
  const { status } = routeApi.useSearch();
  const navigate = routeApi.useNavigate();
  const filter: FilterValue = status ?? 'ALL';

  const handleFilterChange = useCallback(
    (val: FilterValue) => {
      void navigate({
        search: val === 'ALL' ? {} : { status: val as DeliveryStatus },
        replace: true,
      });
    },
    [navigate],
  );

  const counts = useMemo(() => {
    const base = { ALL: deliveries.length } as Record<FilterValue, number>;
    for (const s of ALL_STATUSES) {
      base[s] = deliveries.filter((d) => d.status === s).length;
    }
    return base;
  }, [deliveries]);

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <h1 className="text-lg font-bold text-slate-900">배송 현황 대시보드</h1>
          <p className="text-xs text-slate-400 mt-0.5">
            {new Date().toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}{' '}
            기준
          </p>
        </div>
        <div className="max-w-3xl mx-auto px-4 pb-3">
          <DeliveryFilter selected={filter} counts={counts} onChange={handleFilterChange} />
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6">
        <DeliveryList deliveries={deliveries} filter={filter} />
      </main>
    </div>
  );
}
