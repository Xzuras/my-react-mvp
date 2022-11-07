import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
const DeleteInstrument = ({ instrumentId }) => {
  let clickHandler = () => {
    fetch(`http://localhost:5000/api/instrument/delete/${instrumentId}`, {
      method: "DELETE",
    });
    console.log("Deleted Instrument Id#", instrumentId);
  };
  return (
    <Button
      variant="contained"
      color="error"
      endIcon={<DeleteIcon />}
      onClick={clickHandler}
    >
      DELETE
    </Button>
  );
};
export default DeleteInstrument;
