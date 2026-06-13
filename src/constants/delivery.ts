import {
  Package,
  Truck,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
} from 'lucide-react';
import type { DeliveryStatus, TimelineStep } from '@/types/delivery';

export const STATUS_CONFIG: Record<
  DeliveryStatus,
  {
    label: string;
    textColor: string;
    bgColor: string;
    borderColor: string;
    cardBorder: string;
    icon: typeof Truck;
  }
> = {
  PREPARING: {
    label: '배송 준비 중',
    textColor: 'text-slate-600',
    bgColor: 'bg-slate-100',
    borderColor: 'border-slate-200',
    cardBorder: 'border-slate-200',
    icon: Package,
  },
  IN_TRANSIT: {
    label: '배송 중',
    textColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    cardBorder: 'border-blue-200',
    icon: Truck,
  },
  DELIVERED: {
    label: '배송 완료',
    textColor: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    cardBorder: 'border-emerald-200',
    icon: CheckCircle2,
  },
  DELAYED: {
    label: '배송 지연',
    textColor: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-300',
    cardBorder: 'border-orange-300',
    icon: AlertTriangle,
  },
  RETURNED: {
    label: '반송',
    textColor: 'text-red-700',
    bgColor: 'bg-red-100',
    borderColor: 'border-red-300',
    cardBorder: 'border-red-300',
    icon: RotateCcw,
  },
};

export const TIMELINE_STEPS: Array<{ key: TimelineStep; label: string }> = [
  { key: 'PREPARING', label: '배송 준비' },
  { key: 'IN_TRANSIT', label: '배송 중' },
  { key: 'DELIVERED', label: '배송 완료' },
];

/** 타임라인에서 현재 완료된 단계 인덱스 반환 (-1 = 시작 전) */
export const TIMELINE_STEP_INDEX: Record<DeliveryStatus, number> = {
  PREPARING: 0,
  IN_TRANSIT: 1,
  DELAYED: 1,
  DELIVERED: 2,
  RETURNED: 2,
};

export const ALL_STATUSES = Object.keys(STATUS_CONFIG) as DeliveryStatus[];
