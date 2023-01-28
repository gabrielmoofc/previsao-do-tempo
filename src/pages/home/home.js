import React from "react";
import "./home.css";
import nublado from "../../assets/img/nublado.svg";
import CidadePesquisa from "../../components/CidadePesquisa/CidadePesquisa";
import SearchIcon from "@mui/icons-material/Search";
import clearNight from "../../assets/img/ClearNightV3.svg";
import Thunderstorms from "../../assets/img/ClearNightV3.svg";

export default function Home() {
  return (
    <section id="sectionHome" className="nublado">
      <nav id="header">
        <div id="pesquisa">
          <div id="containerPesquisar">
            <input
              id="inputPesquisa"
              placeholder="Pesquisar por local"
              name="pesquisarCidade"
            />
            <label id="label " for="inputPesquisa">
              <div id="containerIconePesquisa">
                <SearchIcon id="iconePesquisa" />
              </div>
            </label>
          </div>
        </div>
        <div id="lugaresPesquisados">
          <CidadePesquisa
            temperatura="31°"
            cidade="Rio de Janeiro"
            imgTempo={nublado}
          />
          <CidadePesquisa
            temperatura="25°"
            cidade="São Paulo"
            imgTempo={clearNight}
          />
          <CidadePesquisa
            temperatura="15°"
            cidade="Santa Catarina"
            imgTempo={Thunderstorms}
          />
        </div>
      </nav>
      <main id="mainContainer">
        <div id="mainContent">
          <div id="nomeCidade">
            <h1>Dourados, MS, Brasil</h1>
            <h3>12:30 PM</h3>
          </div>
          <div id="temperaturaContainer">
            <div id="temperaturaContent">
              <img id="nublado" src={nublado} />
              <h1 id="txtTemperatura">37°C</h1>
            </div>
            <div id="mensagemClimaContainer">
              <h1>Muitas Nuvens</h1>
              <h2>Sensação Térmica</h2>
            </div>
          </div>
          <div id="mensagemDiaContainer">
            <div id="mensagemDia">
              <p>
                lorem loremloremv lorem lorem lorem lorem lorem lorem loremlorem
                loremloremlorem lorem loremlorem lorem
              </p>
            </div>
          </div>
          <div id="informacoesContainer">
            <div className="itemsInfo">
              <p>QUALI. DO AR</p>
              <p>37</p>
            </div>
            <div className="itemsInfo">
              <p>VENTO</p>
              <p>20km/h</p>
            </div>
            <div className="itemsInfo">
              <p>ÚMIDADE</p>
              <p>70%</p>
            </div>
            <div className="itemsInfo">
              <p>PRESSÃO</p>
              <p>1012 mb</p>
            </div>
            <div className="itemsInfo">
              <p>VISIBILIDADE</p>
              <p>5km/h</p>
            </div>
          </div>
        </div>
        <aside id="asideContent">
          <div id="cimaAside">
            <div id="climaHoje">
              <div id="tituloDia">
                <h4>Hoje</h4>
              </div>
              <div id="contentDia">
                <div id="tempAtual">
                  <img id="imgHoje" src={nublado} />
                  <div id="grausHoje">
                    <h4>34°</h4>
                    <h4>23°</h4>
                  </div>
                </div>
              </div>
            </div>
            <div id="climaAmanha"></div>
          </div>
          <div id="baixoAside">teste</div>
        </aside>
      </main>
    </section>
  );
}
