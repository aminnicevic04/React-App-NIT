import React from "react";
import "./main.css";
import Button from "../button";
import Input from "../input";
import Card from "../card";

const cardData = [
  {
    id: 1,
    title: "Card 1",
    description: "This is the 1. card.",
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is the 2. card.",
  },
  {
    id: 3,
    title: "Card 3",
    description: "This is the 3. card.",
  },
  {
    id: 4,
    title: "Card 4",
    description: "This is the 4. card.",
  },
  {
    id: 5,
    title: "Card 5",
    description: "This is the 5. card.",
  },
  {
    id: 6,
    title: "Card 6",
    description: "This is the 6. card.",
  },
  {
    id: 7,
    title: "Card 7",
    description: "This is the 7. card.",
  },
  {
    id: 8,
    title: "Card 8",
    description: "This is the 8. card.",
  },
  {
    id: 9,
    title: "Card 9",
    description: "This is the 9. card.",
  },
  {
    id: 10,
    title: "Card 10",
    description: "This is the 10. card.",
  },
];

const Main = () => (
  <div className="main">
    <div className="cards">
      {cardData.map((card) => (
        <Card key={card.id} title={card.title} description={card.description} />
      ))}
    </div>
  </div>
);

export default Main;
