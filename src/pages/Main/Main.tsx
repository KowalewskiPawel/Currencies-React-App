import { useEffect } from "react";
import { useAppDispatch } from "../../app/store";
import { fetchRates } from "../../features/currency";

export const Main = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRates());
  }, [dispatch]);

  return <div>Hello World</div>;
};
