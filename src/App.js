import React, { useState, useEffect } from "react";
import Header from "./Header";
import ButtonApod from "./buttonAPOD";
import APOD from "./APOD";
import axios from "axios";
import "./App.css"

const APIKey = "ZZiO6f1RcheyeRmwgte17PfJTpALOaTUg64Ucy7Z"

function App() {

  const [showAPOD, setShowAPOD] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {

    const fetchData = () => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=${APIKey}`)
        .then(res => setData(res.data))
        .catch(err => console.log(`There was an error: ${err}`))
    };

    fetchData();
    return () => console.log("Clean effect");

  }, [])

  return (
    <div className="App">
      <Header />
      {showAPOD && <APOD data={data}/>}
      <ButtonApod show={showAPOD} setShow={setShowAPOD} />
    </div>
  );
}

export default App;
