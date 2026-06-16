import { memo, useCallback } from 'react';
import { LayoutList } from 'lucide-react';
import { STATUS_CONFIG, ALL_STATUSES } from '@/constants/delivery';
import type { DeliveryStatus } from '@/types/delivery';

interface DeliveryFilterProps {
  selected: DeliveryStatus | 'ALL';
  counts: Record<DeliveryStatus | 'ALL', number>;
  onChange: (status: DeliveryStatus | 'ALL') => void;
}

type FilterOption = DeliveryStatus | 'ALL';

const FILTER_OPTIONS: Array<{ key: FilterOption; label: string; icon: React.ElementType }> = [
  { key: 'ALL', label: '전체', icon: LayoutList },
  ...ALL_STATUSES.map((s) => ({
    key: s as FilterOption,
    label: STATUS_CONFIG[s].label,
    icon: STATUS_CONFIG[s].icon,
  })),
];

export const DeliveryFilter = memo(function DeliveryFilter({
  selected,
  counts,
  onChange,
}: DeliveryFilterProps) {
  const handleClick = useCallback((key: FilterOption) => () => onChange(key), [onChange]);

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {FILTER_OPTIONS.map(({ key, label, icon: Icon }) => {
        const isActive = selected === key;
        const count = counts[key] ?? 0;

        let activeClass: string;
        if (isActive) {
          activeClass = 'bg-slate-800 text-white border-slate-800';
        } else if (key === 'ALL') {
          activeClass = 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200';
        } else {
          const cfg = STATUS_CONFIG[key as DeliveryStatus];
          activeClass = `${cfg.bgColor} ${cfg.textColor} ${cfg.borderColor} ${cfg.hoverBg}`;
        }

        return (
          <button
            key={key}
            type="button"
            onClick={handleClick(key)}
            className={`cursor-pointer flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-sm font-medium transition-colors duration-150 ${activeClass}`}
          >
            <Icon size={13} strokeWidth={2.5} />
            {label}
            <span
              className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${
                isActive ? 'bg-white/20' : 'bg-slate-100 text-slate-500'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
});
