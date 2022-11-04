import React, { useState, useEffect } from "react";

const Instrument = () => {
  const [instrument, setInstrument] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/instrument')
      .then((response) => response.json())
      .then((result) => {
        setInstrument(result);
        console.log("useEffect", result);
      });
  }, []);

  return (
    <div>
     
      {console.log(instrument[0]?.kind)}
    </div>
  );
};

export default Instrument;
