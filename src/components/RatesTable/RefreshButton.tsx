import { useAppDispatch, useAppSelector } from "../../app/store";
import { fetchRates, selectCurrencyState } from "../../features/currency";
import styles from './RefreshButton.module.scss';

export const RefreshButton = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector(selectCurrencyState);

  const refetchExchangeRates = () => {
    dispatch(fetchRates());
  };

  return (
    <div className={styles.refreshButtonContainer}>
      <button onClick={refetchExchangeRates} disabled={loading}>
        Refresh
      </button>
    </div>
  );
};
