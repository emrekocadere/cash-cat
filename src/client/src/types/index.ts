export interface ApiError {
  message: string;
  statusCode?: number;
  errors?: Record<string, string[]>;
}

export type { ResultT, Result } from './common.types';
export type { LoginRequest, RegisterRequest, AuthResponse, User, TokenPayload } from './auth.types';
export type { Account, CreateAccountRequest } from './account.types';
export type { Transaction, CreateTransactionRequest, TransactionType } from './transaction.types';
export type { Currency } from './currency.types';
export type { Category } from './category.types';
