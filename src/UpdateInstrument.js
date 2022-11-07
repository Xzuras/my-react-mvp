import React from "react";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";

const UpdateInstrument = ({ instrumentId }) => {
  let clickHandler = () => {
    let kindPrompt = window.prompt("Edit Kind", "Kind");
    let familyPrompt = window.prompt("Edit Family", "Family");
    let modelPrompt = window.prompt("Edit Model", "Model");
    let inputData = {
      kind: kindPrompt,
      family: familyPrompt,
      model: modelPrompt,
    };
    fetch(`http://localhost:5000/api/instrument/update/${instrumentId}`, {
      method: "PATCH",
      body: JSON.stringify(inputData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Updated Id#", instrumentId);
  };
  return (
    <Button variant="contained" endIcon={<EditIcon />} onClick={clickHandler}>
      EDIT
    </Button>
  );
};
export default UpdateInstrument;
