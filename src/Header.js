import React from "react";
import styled from "styled-components";


const Header = (props) => {

    const H1 = styled.h1`
        ${props => (props.show) ? `color: RoyalBlue;` : `color: OliveDrab;` }
    `
    return (
        <header>
            <h2>Manny's</h2>
            <H1 show={props.show}>Astronomy Picture of the Day</H1>
            <h2>(APOD)</h2>
        </header>
    )
}

export default Header;