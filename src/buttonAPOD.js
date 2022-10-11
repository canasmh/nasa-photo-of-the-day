import React from "react";

const ButtonAPOD = (props) => {

    const {show, setShow} = props;


    return (
        <button onClick={() => setShow(!show)}>{!show ? "Get APOD" : "Hide APOD"}</button>
    )
};

export default ButtonAPOD;