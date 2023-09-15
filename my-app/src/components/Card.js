import React from "react";
import "./Card.css";
import slika from "./amci2.jpg";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Card(props) {
  const { ime, obrazovanje } = props;

  console.log(ime, obrazovanje);
  return (
    <>
      <div className="slika1">
        <img src={slika} alt="amci" />
        <div className="prvitekst">
          <p>{props.ime}</p>
        </div>
        <div className="drugitekst">{props.obrazovanje}</div>
        <div className="drugitekst">{props.godine}</div>
        <div className="wcp">
          <a
            href="https://github.com/aminnicevic04"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/amin-nicevic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://www.instagram.com/amin.nicevic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={32} />
          </a>
        </div>
      </div>

      <div className="container">
        <div className="centarkontent"></div>
      </div>
    </>
  );
}

export default Card;
