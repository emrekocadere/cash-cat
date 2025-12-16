export enum TransactionType {
  Income = 'Income',
  Expense = 'Expense',
}

export interface TransactionTypeObj {
  id: string;
  name: string;
}

export interface Transaction {
  amount: number;
  title?: string;
  description?: string;
  categoryId: string;
  accountId: string;
  transactionTypeId?: string;
}

export interface CreateTransactionRequest {
  amount: number;
  description: string;
  type: TransactionType;
  date: string;
  categoryId: string;
  accountId: string;
}
export interface Category {
  id: string;
  name: string;
}

export interface UpdateTransactionRequest extends Partial<CreateTransactionRequest> {
  id: string;
}
