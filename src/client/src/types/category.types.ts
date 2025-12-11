import type { TransactionType } from './transaction.types';

export interface Category {
  id: string;
  name: string;
  icon?: string;
  color?: string;
  type: TransactionType;
  createdAt: string;
}
