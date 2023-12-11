import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { fetchRates, selectCurrencyState } from "../../features/currency";
import styles from "./RatesTable.module.scss";

export const RatesTable = () => {
  const dispatch = useAppDispatch();
  const { rates, currency, loading, error } =
    useAppSelector(selectCurrencyState);

  useEffect(() => {
    dispatch(fetchRates());
  }, [dispatch, currency]);

  if (loading) {
    return <div className={styles.loadingMessage}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.errorMessage}>Error: {error}</div>;
  }

  return (
    <table className={styles.ratesTable}>
      <thead>
        <tr>
          <th>Currency</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(rates).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
