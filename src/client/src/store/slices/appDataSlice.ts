import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { accountsApi } from '@/api/endpoints/accounts.api';
import { transactionsApi } from '@/api/endpoints/transactions.api';
import type { Currency } from '@/types/currency.types';
import type { AccountTypeInfo } from '@/types/account.types';
import type { Category } from '@/types/category.types';

interface AppDataState {
  currencies: Currency[];
  accountTypes: AccountTypeInfo[];
  categories: Category[];
  isLoaded: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: AppDataState = {
  currencies: [],
  accountTypes: [],
  categories: [],
  isLoaded: false,
  isLoading: false,
  error: null,
};

export const fetchAppData = createAsyncThunk(
  'appData/fetchAppData',
  async (_, { rejectWithValue }) => {
    try {
      const [currencies, accountTypes, categories] = await Promise.all([
        transactionsApi.getAllCurrencies(),
        accountsApi.getAllAccountTypes(),
        transactionsApi.getAllCategories(),
      ]);
      return { currencies, accountTypes, categories };
    } catch (error: any) {
      return rejectWithValue(error.message || 'Failed to fetch app data');
    }
  }
);

const appDataSlice = createSlice({
  name: 'appData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAppData.fulfilled, (state, action) => {
        state.currencies = action.payload.currencies;
        state.accountTypes = action.payload.accountTypes;
        state.categories = action.payload.categories;
        state.isLoaded = true;
        state.isLoading = false;
      })
      .addCase(fetchAppData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default appDataSlice.reducer;
