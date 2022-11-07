import "./App.css";
import Instrument from "./Instrument";
import { useState } from "react";
import CreateInstrument from "./CreateInstrument";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  let [boolean, setBoolean] = useState(false);
  //set a boolean state

  let clickHandler = () => {
    //setBoolean changes the state of boolean to !boolean
    setBoolean(!boolean);

    console.log(boolean);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <div className="App">
        <Button
          variant="contained"
          color="success"
          endIcon={<ArrowDropDownCircleIcon />}
          onClick={clickHandler}
        >
          Results
        </Button>
        {boolean ? <Instrument /> : <CreateInstrument />}
      </div>
    </ThemeProvider>
  );
}

export default App;
