import { apiClient } from '../client/axios.client';
import type { Account, AccountType, AccountTypeInfo } from '@/types/account.types';
import type { ResultT } from '@/types/common.types';

export interface CreateAccountRequest {
  name: string;
  accountTypeId: string;
  balance: number;
  currencyId: string;
}

export const accountsApi = {
  getAll: async (): Promise<Account[]> => {
    const { data } = await apiClient.get<ResultT<Account[]>>('/account');
    return data.value!;
  },


  create: async (account: CreateAccountRequest): Promise<ResultT<Account>> => {
    const { data } = await apiClient.post<ResultT<Account>>('/account', account);
    return data;
  },

  delete: async (id: string): Promise<ResultT<void>> => {
    const { data } = await apiClient.delete<ResultT<void>>(`/account/${id}`);
    return data;
  },

  getAllAccountTypes: async (): Promise<AccountTypeInfo[]> => {
    const { data } = await apiClient.get<ResultT<AccountTypeInfo[]>>('/Account/AccountTypes');
    return data.value!;
  },

  getById: async (id: string): Promise<Account> => {
    const { data } = await apiClient.get<ResultT<Account>>(`/account/${id}`);
    return data.value!;
  },
};