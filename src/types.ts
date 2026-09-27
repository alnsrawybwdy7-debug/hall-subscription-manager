export interface Subscription {
  id: string;
  name: string;
  phone: string;
  email: string;
  startDate: Date;
  endDate: Date;
  plan: 'monthly' | 'quarterly' | 'yearly';
  status: 'active' | 'expired' | 'pending';
  amount: number;
  notes?: string;
}

export interface SubscriptionFormData {
  name: string;
  phone: string;
  email: string;
  startDate: string;
  endDate: string;
  plan: 'monthly' | 'quarterly' | 'yearly';
  amount: number;
  notes?: string;
}
