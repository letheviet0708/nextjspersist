import React from "react";
import { StoreProvider } from "../src/utils/Store";

function App({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default App;
