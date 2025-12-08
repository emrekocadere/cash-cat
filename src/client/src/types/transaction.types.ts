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

export interface Category {
  id: string;
  name: string;
  icon?: string;
  color?: string;
  type: TransactionType;
  createdAt: string;
}

export interface Account {
  id: string;
  name: string;
  type: AccountType;
  balance: number;
  currency: string;
  createdAt: string;
}

export enum AccountType {
  Cash = 'Cash',
  BankAccount = 'BankAccount',
  CreditCard = 'CreditCard',
  Savings = 'Savings',
}
