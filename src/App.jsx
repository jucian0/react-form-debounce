import React from 'react';
import FormControlled from './Components/FormControlled'
import FormDebounce from './Components/FormDebounce'

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <FormDebounce />
        </div>
        <div className="col-lg-6 col-md-6">
          <FormControlled />
        </div>
      </div>
    </div>
  );
}

export default App;
