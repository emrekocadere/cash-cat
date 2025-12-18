import { apiClient } from '../client/axios.client';
import type {
  Transaction,
  CreateTransactionRequest,
  TransactionType,
  TransactionDashboard,
} from '@/types/transaction.types';
import type { Currency } from '@/types/currency.types';
import type { Result, ResultT } from '@/types/common.types';
import { Category } from '@/types/category.types';

export const transactionsApi = {

  getByAccountId: async (accountId: string): Promise<Transaction[]> => {
    const { data } = await apiClient.get<ResultT<Transaction[]>>(`/Transaction/${accountId}`);
    return data.value!;
  },

  create: async (transaction: CreateTransactionRequest): Promise<Result> => {
    console.log('Creating transaction:', transaction);
    const { data } = await apiClient.post<Result>('/transaction', transaction);
    return data;
  },

  delete: async (id: string): Promise<ResultT<void>> => {
    const { data } = await apiClient.delete<ResultT<void>>(`/transactions/${id}`);
    return data;
  },

  getAllCurrencies: async (): Promise<Currency[]> => {
    const { data } = await apiClient.get<ResultT<Currency[]>>('/Transaction/Currencies');
    return data.value!;
  },
  getAllCategories: async (): Promise<Category[]> => {
    const { data } = await apiClient.get<ResultT<Category[]>>('/Transaction/categories');
    return data.value!;
  },

  getAllTransactionTypes: async () => {
    const { data } = await apiClient.get<ResultT<TransactionType[]>>('/Transaction/types');
    return data.value!;
  },

  getAll: async (): Promise<Transaction[]> => {
    const { data } = await apiClient.get<ResultT<Transaction[]>>('/Transaction');
    return data.value!;
  },

  getDashboard: async (month: number): Promise<TransactionDashboard> => {
    const { data } = await apiClient.get<ResultT<TransactionDashboard>>(`/Transaction/dashboard/${month}`);
    return data.value!;
  }
};
