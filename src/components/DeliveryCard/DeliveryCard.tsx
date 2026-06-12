import { memo, useState, useCallback } from 'react';
import {
  MapPin,
  Calendar,
  ChevronDown,
  ChevronUp,
  User,
  Phone,
  FileText,
  AlertTriangle,
} from 'lucide-react';
import { StatusBadge } from './StatusBadge';
import { Timeline } from './Timeline';
import { STATUS_CONFIG } from '@/constants/delivery';
import type { Delivery } from '@/types/delivery';

interface DeliveryCardProps {
  delivery: Delivery;
}

export const DeliveryCard = memo(function DeliveryCard({
  delivery,
}: DeliveryCardProps) {
  const [expanded, setExpanded] = useState(false);

  const toggle = useCallback(() => setExpanded((prev) => !prev), []);

  const { status, trackingNumber, recipient, origin, destination, estimatedArrival } =
    delivery;
  const config = STATUS_CONFIG[status];
  const isDelayed = status === 'DELAYED';

  return (
    <article
      className={`rounded-xl border bg-white shadow-sm transition-shadow duration-200 hover:shadow-md overflow-hidden ${config.cardBorder}`}
    >
      {/* Delay warning banner */}
      {isDelayed && delivery.delayReason && (
        <div className="flex items-center gap-2 px-4 py-2 bg-orange-50 border-b border-orange-200">
          <AlertTriangle size={14} className="text-orange-500 shrink-0" strokeWidth={2.5} />
          <p className="text-xs text-orange-700 font-medium truncate">{delivery.delayReason}</p>
        </div>
      )}

      {/* Card header — always visible */}
      <button
        type="button"
        className="w-full text-left px-4 pt-3.5 pb-3 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-inset"
        onClick={toggle}
        aria-expanded={expanded}
        aria-label={`${trackingNumber} 배송 정보 ${expanded ? '접기' : '펼치기'}`}
      >
        {/* Row 1: badge + tracking + toggle */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <StatusBadge status={status} />
          <div className="flex items-center gap-2 ml-auto">
            <span className="text-xs text-slate-400 font-mono">{trackingNumber}</span>
            <div
              className={`text-slate-400 transition-transform duration-200 ${expanded ? 'rotate-0' : ''}`}
            >
              {expanded ? (
                <ChevronUp size={16} strokeWidth={2} />
              ) : (
                <ChevronDown size={16} strokeWidth={2} />
              )}
            </div>
          </div>
        </div>

        {/* Row 2: recipient */}
        <div className="flex items-center gap-1.5 mb-1.5">
          <User size={13} className="text-slate-400 shrink-0" />
          <span className="text-sm font-semibold text-slate-800">{recipient}</span>
        </div>

        {/* Row 3: route + ETA */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1 text-xs text-slate-500 min-w-0">
            <MapPin size={12} className="text-slate-400 shrink-0" />
            <span className="truncate">
              {origin}
              <span className="mx-1 text-slate-300">→</span>
              {destination}
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs text-slate-500 shrink-0">
            <Calendar size={12} className="text-slate-400" />
            <span>{estimatedArrival}</span>
          </div>
        </div>
      </button>

      {/* Expandable detail section */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          expanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!expanded}
      >
        <div className="px-4 pb-4 pt-1 border-t border-slate-100">
          {/* Timeline */}
          <div className="mb-4">
            <Timeline delivery={delivery} />
          </div>

          {/* Driver info */}
          {delivery.driver && (
            <div className="flex items-start gap-3 mb-3">
              <div className="flex items-center gap-1.5 text-xs text-slate-600">
                <User size={12} className="text-slate-400 shrink-0" />
                <span>배송기사</span>
                <span className="font-semibold text-slate-800">{delivery.driver.name}</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-slate-500">
                <Phone size={12} className="text-slate-400" />
                <span>{delivery.driver.phone}</span>
              </div>
            </div>
          )}

          {/* Notes */}
          {delivery.notes && (
            <div className="flex items-start gap-1.5 text-xs text-slate-500">
              <FileText size={12} className="text-slate-400 mt-0.5 shrink-0" />
              <span>{delivery.notes}</span>
            </div>
          )}

          {/* Latest location */}
          {delivery.history.length > 0 && (
            <div className="mt-3 pt-3 border-t border-slate-100">
              <p className="text-xs text-slate-400">
                최근 업데이트:{' '}
                <span className="text-slate-600">
                  {delivery.history[delivery.history.length - 1].timestamp}
                </span>
                {' · '}
                <span className="text-slate-600">
                  {delivery.history[delivery.history.length - 1].location}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
});
