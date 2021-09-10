import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Quote } from "./component/Quote";

import Walter0 from "./pictures/Walter.jpg";
import Walter1 from "./pictures/Walter1.jpg";
import Walter2 from "./pictures/Walter2.jpg";
import Walter3 from "./pictures/Walter3.jpg";
import Walter4 from "./pictures/Walter4.jpg";

import Jesse0 from "./pictures/Jesse0.jpg";
import Jesse1 from "./pictures/Jesse1.jpg";
import Jesse2 from "./pictures/Jesse2.jpg";
import Jesse3 from "./pictures/Jesse3.jpg";
import Jesse4 from "./pictures/Jesse4.jpg";

import Saul0 from "./pictures/Saul0.jpg";
import Saul1 from "./pictures/Saul1.jpg";
import Saul2 from "./pictures/Saul2.jpg";
import Saul3 from "./pictures/Saul3.jpg";
import Saul4 from "./pictures/Saul4.jpg";

import Together0 from "./pictures/together0.jpg";
import Together1 from "./pictures/together1.jpg";
import Together2 from "./pictures/together2.jpg";
import Together3 from "./pictures/together3.jpg";

import BreakingBad from "./pictures/BreakingBad.jpg";

function App() {
  const [quote, setQuote] = useState("Bzzzz");
  const [author, setAuthor] = useState("The fly");
  const [picture, setPicture] = useState(BreakingBad);
  useEffect(() => {
    document.body.style.backgroundImage = `url(${picture})`;
  }, [picture]);
  useEffect(() => {
    getApiData();
    quoteTimer();
  }, []);

  const getApiData = async () => {
    try {
      const response = await axios.get(
        "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
      );
      setQuote(response.data[0].quote);
      setAuthor(response.data[0].author);
      readName(response.data[0].author);
    } catch (error) {
      console.error(error);
    }
  };
  const quoteTimer = () => {
    console.log("in timer");
    setInterval(getApiData, 10000);
  };

  const walterArray = [Walter0, Walter1, Walter2, Walter3, Walter4];
  const jesseArray = [Jesse0, Jesse1, Jesse2, Jesse3, Jesse4];
  const saulArray = [Saul0, Saul1, Saul2, Saul3, Saul4];
  const togetherArray = [
    Together0,
    Together1,
    Together2,
    Together3,
    BreakingBad,
  ];

  const readName = (author) => {
    const first = author.split(" ")[0];
    const numbr = Math.floor(Math.random() * 5);
    if (first === "Walter") {
      console.log(walterArray[numbr]);
      setPicture(walterArray[numbr]);
    } else if (first === "Jesse") {
      console.log(jesseArray[numbr]);
      return setPicture(jesseArray[numbr]);
    } else if (first === "Saul") {
      console.log(saulArray[numbr]);
      return setPicture(saulArray[numbr]);
    } else {
      console.log(togetherArray[numbr]);
      return setPicture(togetherArray[numbr]);
    }

    // const picName = first + Math.floor(Math.random() * 5);
    // setPicture(picName);
  };

  return (
    <div className="App">
      <Quote quote={quote} author={author} setpicture={readName} />
    </div>
  );
}

export default App;
