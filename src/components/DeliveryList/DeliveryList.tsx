import { useMemo } from 'react';
import { DeliveryCard } from '@/components/DeliveryCard/DeliveryCard';
import { DeliveryCardSkeleton } from '@/components/Skeleton/DeliveryCardSkeleton';
import type { Delivery, DeliveryStatus } from '@/types/delivery';

type FilterValue = DeliveryStatus | 'ALL';

interface DeliveryListProps {
  deliveries: Delivery[];
  filter: FilterValue;
  loading?: boolean;
}

export function DeliveryList({ deliveries, filter, loading = false }: DeliveryListProps) {
  const filtered = useMemo(
    () => (filter === 'ALL' ? deliveries : deliveries.filter((d) => d.status === filter)),
    [deliveries, filter],
  );

  if (loading) {
    return (
      <div className="space-y-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <DeliveryCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (filtered.length === 0) {
    return (
      <div className="py-16 text-center text-slate-400 text-sm">
        해당 상태의 배송 건이 없습니다.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {filtered.map((delivery) => (
        <DeliveryCard key={delivery.id} delivery={delivery} />
      ))}
    </div>
  );
}
