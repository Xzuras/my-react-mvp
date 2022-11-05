import React, { useState } from "react";

const CreateInstrument = () => {
  const [kind, setKind] = useState("");
  const [family, setFamily] = useState("");
  const [model, setModel] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // 👈️ prevent page refresh
    let inputData = { kind: kind, family: family, model: model };
    fetch("http://localhost:5000/api/instrument/create", {
      method: "POST",
      body: JSON.stringify(inputData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="kind"
          id="kindInput"
          onChange={(event) => setKind(event.target.value)}
          value={kind}
        ></input>
        <input
          type="text"
          placeholder="family"
          id="familyInput"
          onChange={(event) => setFamily(event.target.value)}
          value={family}
        ></input>
        <input
          type="text"
          placeholder="model"
          id="modelInput"
          onChange={(event) => setModel(event.target.value)}
          value={model}
        ></input>
        <button type="submit">create</button>
      </form>
    </div>
  );
};
export default CreateInstrument;
