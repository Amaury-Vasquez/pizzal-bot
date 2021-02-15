import React, { Fragment } from "react";

import { GlobalStyles } from "./styles/GlobalStyles";
import { Home } from "./pages/Home";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Home />
    </Fragment>
  );
}

export default App;
