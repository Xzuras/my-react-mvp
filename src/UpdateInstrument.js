import React from "react";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";

const UpdateInstrument = ({
  instrumentId,
  instrumentKind,
  instrumentFamily,
  instrumentModel,
}) => {
  let clickHandler = () => {

    let kindPrompt = window.prompt("Edit Kind", instrumentKind);
    if (kindPrompt === null || kindPrompt === "") {
      kindPrompt = instrumentKind;
    }
    let familyPrompt = window.prompt("Edit Family", instrumentFamily);
    if (familyPrompt === null || familyPrompt === "") {
      familyPrompt = instrumentFamily;
    }
    let modelPrompt = window.prompt("Edit Model", instrumentModel);
    if (modelPrompt === null || modelPrompt === "") {
      modelPrompt = instrumentModel;
    }
    console.log("input", kindPrompt, familyPrompt, modelPrompt);
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
