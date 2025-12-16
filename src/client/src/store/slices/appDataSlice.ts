import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { accountsApi } from '@/api/endpoints/accounts.api';
import { transactionsApi } from '@/api/endpoints/transactions.api';
import type { Currency } from '@/types/currency.types';
import type { AccountTypeInfo } from '@/types/account.types';
import type { Category } from '@/types/category.types';
import type { TransactionType } from '@/types/transaction.types';

interface AppDataState {
  currencies: Currency[];
  accountTypes: AccountTypeInfo[];
  categories: Category[];
  transactionTypes: TransactionType[];
  isLoaded: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: AppDataState = {
  currencies: [],
  accountTypes: [],
  categories: [],
  transactionTypes: [],
  isLoaded: false,
  isLoading: false,
  error: null,
};

export const fetchAppData = createAsyncThunk(
  'appData/fetchAppData',
  async (_, { rejectWithValue }) => {
    try {
      const [currencies, accountTypes, categories, transactionTypes] = await Promise.all([
        transactionsApi.getAllCurrencies(),
        accountsApi.getAllAccountTypes(),
        transactionsApi.getAllCategories(),
        transactionsApi.getAllTransactionTypes(),
      ]);
      return { currencies, accountTypes, categories, transactionTypes };
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
        state.transactionTypes = action.payload.transactionTypes;
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
