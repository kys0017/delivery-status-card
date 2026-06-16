export type DeliveryStatus = 'PREPARING' | 'IN_TRANSIT' | 'DELIVERED' | 'DELAYED' | 'RETURNED';

export type TimelineStep = 'PREPARING' | 'IN_TRANSIT' | 'DELIVERED';

export interface DeliveryDriver {
  name: string;
  phone: string;
}

export interface DeliveryEvent {
  step: TimelineStep;
  timestamp: string;
  location: string;
}

export interface Delivery {
  id: string;
  trackingNumber: string;
  recipient: string;
  origin: string;
  destination: string;
  estimatedArrival: string;
  status: DeliveryStatus;
  delayReason?: string;
  driver?: DeliveryDriver;
  notes?: string;
  history: DeliveryEvent[];
}
