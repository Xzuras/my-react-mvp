import React from "react";
const DeleteInstrument = ({ instrumentId }) => {
let clickHandler = () => {
    fetch(`http://localhost:5000/api/instrument/delete/${instrumentId}`, {
        method: 'DELETE'
    });
    console.log('Deleted Instrument Id#', instrumentId);
}
return (
    <div>
        <button onClick={clickHandler}>DELETE</button>

    </div>
)
}
export default DeleteInstrument;