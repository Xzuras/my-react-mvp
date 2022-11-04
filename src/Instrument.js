import React, { useState, useEffect } from "react";

const Instrument = () => {
  const [instrument, setInstrument] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/instrument")
      .then((response) => response.json())
      .then((result) => {
        setInstrument(result);
        //console.log("useEffect", result);
      });
  }, []);

  const kind = instrument.map((instrument) => (
    <div key={instrument.id}>
      <br />
      Kind - {instrument.kind}
      <br />
      Family - {instrument.family}
      <br />
      Model - {instrument.model}
    </div>
  ));


  
  return(
     <div>

    {kind}

    </div>
  )
};

export default Instrument;
