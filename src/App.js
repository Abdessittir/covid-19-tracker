import './App.css';
import React, { useEffect } from "react";
import Home from './components/Home';
import { CountryProvider, useCountry } from './contexts/CountryProvider';
import Dashboard from './components/Dashboard';

const Render = () => {
  const { country } = useCountry();
  return country? <Dashboard /> :<Home />;
}

function App() {
  /*
  useEffect(() => {
    
    fetch("https://covid-api.mmediagroup.fr/v1/cases")
    .then(response => response.json())
    .then(data => {
      console.log("all");
    })
    .catch(err => {
      console.log(err);
    });

    fetch("https://covid-api.mmediagroup.fr/v1/cases?country=Morocco")
    .then(response => response.json())
    .then(data => {
      console.log("Morocco");
    })
    .catch(err => {
      console.log(err);
    });

    fetch("https://covid-api.mmediagroup.fr/v1/cases?country=France")
    .then(response => response.json())
    .then(data => {
      console.log("France");
    })
    .catch(err => {
      console.log(err);
    });

    fetch("https://covid-api.mmediagroup.fr/v1/history?country=Germany&status=deaths")
    .then(response => response.json())
    .then(data => {
      console.log("Germany hsitory");
    })
    .catch(err => {
      console.log(err);
    });

    fetch("https://covid-api.mmediagroup.fr/v1/vaccines?country=Morocco")
    .then(response => response.json())
    .then(data => {
      console.log("Morocco vaccine");
    })
    .catch(err => {
      console.log(err);
    });

  }, []);
  */

  return (
    <CountryProvider>
      <Render />
    </CountryProvider>
  );
}

export default App;