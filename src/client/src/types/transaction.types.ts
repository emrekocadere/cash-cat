export interface TransactionType {
  id: string;
  name: string;
}

export interface Transaction {
  id?: string;
  amount: number;
  title?: string;
  description?: string;
  category?: Category;
  accountId: string;
  transactionType?: TransactionType;
  date?: string;
}

export interface CreateTransactionRequest {
  amount: number;
  description: string;
  transactionTypeId: string;
  date: string;
  categoryId: string;
  accountId: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface TransactionDashboard {
  income: number;
  expense: number;
  quantity: number;
}

export interface UpdateTransactionRequest extends Partial<CreateTransactionRequest> {
  id: string;
}
