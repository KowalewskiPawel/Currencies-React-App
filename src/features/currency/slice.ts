import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CurrencyState } from "./state";

const initialState = {
  currency: "USD",
  rates: {},
  loading: false,
  error: null,
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency(state: CurrencyState, action: PayloadAction<string>) {
      state.currency = action.payload;
    },
    setRates(
      state: CurrencyState,
      action: PayloadAction<Record<string, string>>
    ) {
      state.rates = action.payload;
    },
    setLoading(state: CurrencyState, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state: CurrencyState, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { setCurrency, setRates, setLoading, setError } =
  currencySlice.actions;
