import { apiClient } from '../client/axios.client';
import type {
  Transaction,
  CreateTransactionRequest,
} from '@/types/transaction.types';
import type { Currency } from '@/types/currency.types';
import type { ResultT } from '@/types/common.types';

export const transactionsApi = {

  getByAccountId: async (accountId: string): Promise<Transaction[]> => {
    const { data } = await apiClient.get<ResultT<Transaction[]>>(`/Transaction/${accountId}`);
    return data.value!;
  },

  create: async (transaction: CreateTransactionRequest): Promise<ResultT<Transaction>> => {
    const { data } = await apiClient.post<ResultT<Transaction>>('/transactions', transaction);
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
};
