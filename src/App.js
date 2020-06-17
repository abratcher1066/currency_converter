import React, { useEffect } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow'

// Gets latest currency rates from exchangeratesapi.io
const BASE_URL = 'https://api.exchangeratesapi.io/latest'

function App() {

  useEffect(() => {
    // fetching rates then converting to JSON
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])

  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow />
      <div className="equals">=</div>
      <CurrencyRow />
    </>
  );
}

export default App;