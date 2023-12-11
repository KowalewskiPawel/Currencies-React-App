import { useFormik } from "formik";
import { useAppDispatch } from "../../app/store";
import { setCurrency } from "../../features/currency/slice";
import styles from "./CurrencyInputForm.module.scss";

export const CurrencyInputForm = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      currency: "USD",
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
