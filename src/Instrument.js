import React, { useState, useEffect } from "react";

const Instrument = () => {
  const [instrument, setInstrument] = useState([]);
  //const [createInstrument, setCreateInstrument] = useState([]);

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

 // var inputData = {instrument: modelInput.value, brand: brandInput.value, color: colorInput.value, fretNum: fretInput.value}
  /*useEffect(() => {
    fetch ("http://localhost:5000/api/instrument/create", {
        methoud: 'POST',
        body: JSON.stringify('jhe'),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then((response) => response.json())
    .then((result) => {
        setCreateInstrument(result)
    })
  }, [])
console.log(createInstrument)
  */

  return(
     <div>

    {kind}

    </div>
  )
};

export default Instrument;
