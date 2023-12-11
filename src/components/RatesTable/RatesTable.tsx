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

  const renderTableContent = () => {
    if (loading) {
      return <tr><td colSpan={2}>Loading...</td></tr>;
    }

    if (error) {
      return <tr><td colSpan={2}>Error: {error}</td></tr>;
    }

    return Object.entries(rates).map(([key, value]) => (
      <tr key={key}>
        <td>{key}</td>
        <td>{value}</td>
      </tr>
    ));
  };

  return (
    <table className={styles.ratesTable}>
      <thead>
        <tr>
          <th>Currency</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody>
        {renderTableContent()}
      </tbody>
    </table>
  );
};
