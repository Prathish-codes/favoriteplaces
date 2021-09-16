import React from "react";
import "./styles.css";
import { useState } from "react";

const Places = {
  Falls: [
    { name: "Jog Falls", discrptiom: "ddd", rating: "4/5" },
    { name: "Shivanasamudra Falls", rating: "3.5/5" }
  ],

  hills: [
    {
      name: "Nandi Hills",
      rating: "5/5"
    },
    {
      name: "kodachadri Hills",
      rating: "4.5/5"
    }
  ],
  Temples: [
    {
      name: "Dharmasthala temple",
      rating: "3.5/5"
    },
    {
      name: "Udupi srikrishna temple",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Falls");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div style={{}} className="App">
      <h1 style={{ backgroundColor: "grey", padding: "2rem 2rem" }}>
        <span>📍</span>
        My favorite Places in Karnataka{" "}
      </h1>
      <p
        style={{
          fontSize: "1.5rem",
          padding: "4rem",
          borderradius: "25px",
          padding: "20px"
        }}
      >
        {" "}
        Checkout my favorite Places. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(Places).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "2px solid",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "right" }}>
        <ul style={{ paddingInlineStart: "0rem" }}>
          {Places[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "3rem 10rem",
                border: "1px solid #D1D5DB",
                borderBlockColor: "black",
                width: "30%",
                margin: "1rem 15rem",
                borderRadius: "2rem",
                textAlign: "center",
                alignment: "center"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
