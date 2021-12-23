import './App.css';
import React from "react";
import Home from './components/Home';
import { CountryProvider, useCountry } from './contexts/CountryProvider';
import Dashboard from './components/Dashboard';

const Render = () => {
  const { country } = useCountry();
  return country? <Dashboard /> :<Home />;
}

function App() {

  return (
    <CountryProvider>
      <Render />
    </CountryProvider>
  );
}

export default App;