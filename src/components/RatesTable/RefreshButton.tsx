import { useAppDispatch, useAppSelector } from "../../app/store";
import { fetchRates, selectCurrencyState } from "../../features/currency";

export const RefreshButton = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector(selectCurrencyState);

  const refetchExchangeRates = () => {
    dispatch(fetchRates());
  };

  return (
    <div>
      <button onClick={refetchExchangeRates} disabled={loading}>
        Refresh
      </button>
    </div>
  );
};
