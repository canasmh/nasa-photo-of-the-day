import React from "react";

const APOD = (props) => {
    const {data} = props;

    const imgStyle = {
        width: "15rem",
        height: "15rem"
    }

    return (
        <main>
            <h3>{data.title}</h3>
            {/* eslint-disable-next-line */}
            <img src={data.hdurl} alt="NASA's picture of the day" style={imgStyle}/>
            <p><strong>Image Credit: </strong>{data.copyright}</p>
            <p>{data.explanation}</p>
        </main>
    )
}

export default APOD;