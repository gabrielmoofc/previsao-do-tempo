import React from "react";
import "./PrevisaoSemana.css";
import nublado from "../../assets/img/nublado.svg";

export default function PrevisaoSemana(props) {
  return (
    <div className="cardPrevisao">
      <div id="tituloCard">
        <h3>{props.dia}</h3>
      </div>
      <div id="contentCard">
        <div id="tempCard">
          <img id="imgCard" src={props.imgDia} />
          <div id="temperaturaCard">
            <p>{props.tempMaxima}°</p>
            <p>{props.tempMinima}°</p>
          </div>
        </div>
        <div id="infoCard">
          <p>{props.info}</p>
        </div>
      </div>
    </div>
  );
}
