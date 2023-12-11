import { RatesTable, RefreshButton } from "../../components";
import "../../styles/global.scss";

export const Main = () => (
  <div className="mainContainer">
    <h1>Exchange Rate</h1>
    <RefreshButton />
    <RatesTable />
  </div>
);
