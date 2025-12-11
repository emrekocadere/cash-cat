import type { Category } from './category.types';
import type { Account } from './account.types';

export enum TransactionType {
  Income = 'Income',
  Expense = 'Expense',
}

export interface TransactionTypeObj {
  id: string;
  name: string;
}

export interface Transaction {
  id: string;
  amount: number;
  title?: string;
  description?: string;
  type?: TransactionType;
  date: string;
  categoryId: string;
  accountId: string;
  transactionTypeId?: string;
  category?: Category;
  account?: Account;
  transactionType?: TransactionTypeObj;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateTransactionRequest {
  amount: number;
  description: string;
  type: TransactionType;
  date: string;
  categoryId: string;
  accountId: string;
}

export interface UpdateTransactionRequest extends Partial<CreateTransactionRequest> {
  id: string;
}
