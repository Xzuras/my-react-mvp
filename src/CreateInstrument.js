import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import styled from 'styled-components';

const StyledDiv = styled.div`
padding-top: 15px;
`

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
    // 👇️ clear all input values in the form
    setKind("");
    setFamily("");
    setModel("");
  };

  return (
    <StyledDiv>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Type"
          id="outlined-basic"
          variant="outlined"
          onChange={(event) => setKind(event.target.value)}
          value={kind}
        />
        <TextField
          label="Family"
          id="outlined-basic"
          variant="outlined"
          onChange={(event) => setFamily(event.target.value)}
          value={family}
        />
        <TextField
          label="Model"
          id="outlined-basic"
          variant="outlined"
          onChange={(event) => setModel(event.target.value)}
          value={model}
        />
        <Button variant="contained" type="submit" startIcon={<AddCircleIcon />}>
          create
        </Button>
      </form>
    </StyledDiv>
  );
};
export default CreateInstrument;
