import { createFileRoute } from '@tanstack/react-router';
import { DashboardPage } from '@/components/Dashboard/DashboardPage';
import { PendingDashboard } from '@/components/Dashboard/PendingDashboard';
import { ALL_STATUSES } from '@/constants/delivery';
import { MOCK_DELIVERIES } from '@/data/mockData';
import type { DeliveryStatus } from '@/types/delivery';

export const Route = createFileRoute('/')({
  loader: async () => {
    await new Promise((r) => setTimeout(r, 1000));
    return MOCK_DELIVERIES;
  },
  pendingComponent: PendingDashboard,
  validateSearch: (search: Record<string, unknown>): { status?: DeliveryStatus } => ({
    ...(ALL_STATUSES.includes(search.status as DeliveryStatus) && {
      status: search.status as DeliveryStatus,
    }),
  }),
  component: DashboardPage,
});
