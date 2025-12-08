import { apiClient } from '../client/axios.client';
import type {
  Transaction,
  CreateTransactionRequest,
} from '@/types/transaction.types';
import type { ResultT } from '@/types/common.types';

export const transactionsApi = {

  getByAccountId: async (accountId: string): Promise<Transaction[]> => {
    const { data } = await apiClient.get<ResultT<Transaction[]>>(`/Transaction/${accountId}`);
    return data.value!;
  },

  create: async (transaction: CreateTransactionRequest): Promise<Transaction> => {
    const { data } = await apiClient.post<ResultT<Transaction>>('/transactions', transaction);
    return data.value!;
  },

  delete: async (id: string): Promise<void> => {
    await apiClient.delete(`/transactions/${id}`);
  },
  
};
