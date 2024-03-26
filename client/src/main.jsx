import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { NextUIProvider } from "@nextui-org/react";
import { StateContextProvider } from "./context";
import { Sepolia } from "@thirdweb-dev/chains";
import App from "./App";
import "./index.css";
//
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThirdwebProvider
  activeChain={Sepolia}
  clientId="67f9d109194f7343d2c9a621f0ef549f"
  >
    <Router>
      <StateContextProvider>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>,
);
