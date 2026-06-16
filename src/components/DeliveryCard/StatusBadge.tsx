import { memo } from 'react';
import { STATUS_CONFIG } from '@/constants/delivery';
import type { DeliveryStatus } from '@/types/delivery';

interface StatusBadgeProps {
  status: DeliveryStatus;
  size?: 'sm' | 'md';
}

export const StatusBadge = memo(function StatusBadge({ status, size = 'md' }: StatusBadgeProps) {
  const config = STATUS_CONFIG[status];
  const Icon = config.icon;

  const sizeClass = size === 'sm' ? 'text-xs px-2 py-0.5 gap-1' : 'text-sm px-2.5 py-1 gap-1.5';

  const iconSize = size === 'sm' ? 12 : 14;

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full border ${sizeClass} ${config.textColor} ${config.bgColor} ${config.borderColor}`}
    >
      <Icon size={iconSize} strokeWidth={2.5} />
      {config.label}
    </span>
  );
});
