import { useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { setCurrency } from "../../features/currency/slice";
import styles from "./CurrencyInputForm.module.scss";
import { selectCurrencyState } from "../../features/currency";

export const CurrencyInputForm = () => {
  const dispatch = useAppDispatch();
  const { currency } = useAppSelector(selectCurrencyState);

  const formik = useFormik({
    initialValues: {
      currency,
    },
    onSubmit: (values) => {
      dispatch(setCurrency(values.currency));
    },
  });

  return (
    <form className={styles.formContainer} onSubmit={formik.handleSubmit}>
      <label htmlFor="currency">Currency:</label>
      <input
        id="currency"
        name="currency"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.currency}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
