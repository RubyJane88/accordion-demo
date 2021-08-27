import React from "react";
import { Container, CssBaseline } from "@material-ui/core";

import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <CssBaseline>
      <Container>
        <NavBar />
        <HomePage />
      </Container>
    </CssBaseline>
  );
}

export default App;
