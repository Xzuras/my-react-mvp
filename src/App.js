import "./App.css";
import Instrument from "./Instrument";
import { useState } from "react";

function App() {
  let [boolean, setBoolean] = useState(false);
  //set a boolean state

  let clickHandler = () => {
    //setBoolean changes the state of boolean to !boolean
    setBoolean(!boolean);

    console.log(boolean);
  };

  return (
    <div className="App">
      <button onClick={clickHandler}>click me</button>
      {boolean ? <Instrument /> : null}
    </div>
  );
}

export default App;
