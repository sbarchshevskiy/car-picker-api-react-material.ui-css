import React from "react";
import FetchData from "./components/FetchData";
import "./App.css";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Styling from "./components/Styling";

function App() {
  return (
    <Container>
      <Grid>
        <Styling/>
          <div className="form-outline">
            <h3 className="form-title">Makes Dashboard</h3>
            <FetchData/>
          </div>
      </Grid>
    </Container>
  );
}

export default App;
