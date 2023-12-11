import { store } from "./app/store";
import { Provider } from "react-redux";
import { Main } from "./pages";

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
