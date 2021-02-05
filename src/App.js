import React from "react";
import Header from "./Components/Header";
import LandingSection from "./Components/LandingSection";
import ServicesSection from "./Components/ServicesSection";
import ContactSection from "./Components/ContactSection";
import TestimonialSection from "./Components/TestimonialSection";
import Footer from "./Components/Foot";
import { MuiThemeProvider } from "@material-ui/core";
import { Theme } from "./theme";

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={Theme}>
      <Header />
      <LandingSection />
      <ServicesSection />
      <ContactSection />
      <TestimonialSection />
      <Footer />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
