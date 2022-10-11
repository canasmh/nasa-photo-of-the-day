import React, { useState } from "react";

const APOD = (props) => {
    const {data} = props;

    return (
        <main>
            <h3>{data.title}</h3>
            <img src={data.hdurl} alt="NASA's picture of the day" />
            <p>{data.description}</p>
        </main>
    )
}

export default APOD;