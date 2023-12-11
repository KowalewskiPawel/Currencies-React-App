import { apiClient } from "../../api/client";
import type { AppThunk } from "../../app/store";
import { setError, setLoading, setRates } from "./slice";
import { selectCurrencyState } from "./state";

export const fetchRates = (): AppThunk => async (dispatch, getState) => {
  const rootState = getState();
  const { currency } = selectCurrencyState(rootState);
  dispatch(setLoading(true));
  dispatch(setError(null));

  try {
    const response = await apiClient.get("/exchange-rates", { currency });
    dispatch(setRates(response.data.rates));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(setError(error.message));
    } else {
      dispatch(setError("An unknown error occurred."));
    }
  } finally {
    dispatch(setLoading(false));
  }
};
