export interface Account {
  id: string;
  name: string;
  type: AccountType;
  balance: number;
  currency: string;
}

export enum AccountType {
  Cash = 'Cash',
  BankAccount = 'BankAccount',
  CreditCard = 'CreditCard',
  Savings = 'Savings',
}

export interface AccountTypeInfo {
  id: string;
  name: string;
}
