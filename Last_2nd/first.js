import React from "react";
import ReactDOM from "react-dom/client";
import store from "./Store"; 
import { Provider } from "react-redux";
import CoinCreate from "./CoinCreate";

function App() {
  return (
    <Provider store={store}>
      <CoinCreate />
    </Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
