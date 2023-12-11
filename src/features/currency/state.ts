import type { RootState } from "../../app/store";

export type CurrencyState = {
    currency: string;
    rates: Record<string, string>;
    loading: boolean;
    error: string | null;
};

export const selectCurrencyState = (state: RootState): CurrencyState => state.currency;