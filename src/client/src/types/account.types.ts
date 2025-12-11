import type { Currency } from './currency.types';

export interface Account {
  id: string;
  name: string;
  accountType: AccountTypeInfo;
  balance: number;
  currency: Currency;
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
