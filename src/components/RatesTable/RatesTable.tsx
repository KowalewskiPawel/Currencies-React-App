import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { fetchRates, selectCurrencyState } from "../../features/currency";

export const RatesTable = () => {
  const dispatch = useAppDispatch();
  const { rates, currency, loading, error } =
    useAppSelector(selectCurrencyState);

  useEffect(() => {
    dispatch(fetchRates());
  }, [dispatch, currency]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <table>
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
