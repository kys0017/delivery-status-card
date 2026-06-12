import { memo } from 'react';

export const DeliveryCardSkeleton = memo(function DeliveryCardSkeleton() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm px-4 py-3.5 animate-pulse">
      {/* Badge + tracking */}
      <div className="flex items-center justify-between mb-2">
        <div className="h-6 w-24 rounded-full bg-slate-100" />
        <div className="h-4 w-36 rounded bg-slate-100" />
      </div>
      {/* Recipient */}
      <div className="h-4 w-20 rounded bg-slate-100 mb-1.5" />
      {/* Route + ETA */}
      <div className="flex justify-between">
        <div className="h-3.5 w-48 rounded bg-slate-100" />
        <div className="h-3.5 w-20 rounded bg-slate-100" />
      </div>
    </div>
  );
});
