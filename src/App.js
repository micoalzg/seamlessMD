import React from 'react';
import Patient from './components/Patient'


function App() {

  const data = require("./patient.json")
  console.log(data)

  return (
    <div className="patients">
      <Patient 
        patientInfo={data}
      />
    </div>
  );
}

export default App;
