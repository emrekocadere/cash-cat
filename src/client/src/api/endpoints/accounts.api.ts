import { apiClient } from '../client/axios.client';
import type { Account, AccountType } from '@/types/transaction.types';
import type { ResultT } from '@/types/common.types';

export interface CreateAccountRequest {
  name: string;
  type: AccountType;
  balance: number;
  currency: string;
}

export const accountsApi = {
  getAll: async (): Promise<Account[]> => {
    const { data } = await apiClient.get<ResultT<Account[]>>('/account');
    return data.value!;
  },


  create: async (account: CreateAccountRequest): Promise<Account> => {
    const { data } = await apiClient.post<ResultT<Account>>('/account', account);
    return data.value!;
  },

  // Delete account
  delete: async (id: string): Promise<void> => {
    await apiClient.delete(`/account/${id}`);
  },
};
