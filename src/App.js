import React from "react";
import Header from "./Components/Header";
import Index from "./Pages/index";
import Footer from "./Components/Foot";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
import { Theme } from "./theme";

function App() {
  return (
    <div className="App">
      <Router>
        <MuiThemeProvider theme={Theme}>
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
          <Footer />
        </MuiThemeProvider>
      </Router>
    </div>
  );
}

export default App;
