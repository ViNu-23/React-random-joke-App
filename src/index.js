import React, { useEffect, useState } from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import axios from "axios";

function Main() {
  const [joke, setJoke] = useState("");
  const [buttonColor, setButtonColor] = useState("#3498db");
  async function getData() {
    try {
      const response = await axios.get("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      setJoke(response.data.joke);
    } catch (error) {
      console.log(`API Fetch error ${error}`);
    }
  }
  console.log(joke);
  useEffect(() => {
    getData();
  }, []);

  function handleClick() {
    const randomButtonColor = getRandomColor();
    setButtonColor(randomButtonColor);
    getData();
  }
  function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  return (
    <div className="container">
      <h1 style={{ color: buttonColor }}>Try Not to Laugh 😂</h1>
      <p className="joke-text">{joke}</p>
      <div className="button">
        <button
          className="btn new-joke-btn"
          onClick={handleClick}
          style={{ backgroundColor: buttonColor }}
        >
          New Joke
        </button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
