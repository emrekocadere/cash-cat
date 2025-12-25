import { apiClient } from '../client/axios.client';


import type {  CreateGoalRequest } from '@/types/request.types';
import type { Result,ResultT } from '@/types/common.types';
import { Goal } from '@/types/model.types';

export const goalsApi = {
  

  create: async (goal: CreateGoalRequest): Promise<Result> => {
    console.log('Creating goal:', goal);
    const { data } = await apiClient.post<Result>('/goal', goal);
    return data;
  },

    GetAll: async (): Promise<ResultT<Goal[]>> => {
    const { data } = await apiClient.get<ResultT<Goal[]>>('/goal');
    console.log('Fetched goals:', data);
    return data;
  }

};
  