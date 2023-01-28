import React from "react";
import "./CidadePesquisa.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function CidadePesquisa(props) {
  return (
    <div className="cidadeAdicionadaContainer">
      <div className="cidadeAdicionada">
        <div className="infoCidade">
          <div className="nomeCidadeAdd">
            <h4>{props.cidade}</h4>
          </div>
          <div className="tempAtualCidadeAdd">
            <img src={props.imgTempo} className="imgCidadeAdd" />
            <h4>{props.temperatura}</h4>
          </div>
        </div>
        <div className="toolIcone">
          <MoreVertIcon />
        </div>
      </div>
    </div>
  );
}
