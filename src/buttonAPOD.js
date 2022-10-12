import React from "react";
import styled from "styled-components";

const ButtonAPOD = (props) => {

    const {show, setShow} = props;

    const Button = styled.button`
        color: #FFFFFF;
        padding: 0.8rem 2rem;
        font-size: 1.2rem;
        border-radius: 10px;
        border: 2px solid #AAAAAA;
        ${props => (props.show) ? `background-color: RoyalBlue;` : `background-color: OliveDrab;` }
    `


    return (
        <Button show={show} onClick={() => setShow(!show)}>{!show ? "Get APOD" : "Hide APOD"}</Button>
    )
};

export default ButtonAPOD;