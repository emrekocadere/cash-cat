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
  title: string;
}


 




export interface Category {
  id: string;
  name: string;
}

export interface CategoryExpense {
  categoryId: string;
  categoryName: string;
  amount: number;
  percentage: number;
}

export interface TransactionDashboard {
  income: number;
  expense: number;
  quantity: number;
  categoryExpenses: CategoryExpense[];
}

export interface UpdateTransactionRequest extends Partial<CreateTransactionRequest> {
  id: string;
}
