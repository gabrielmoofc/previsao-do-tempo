import React from "react";
import "./home.css";
import nublado from "../../assets/img/nublado.svg";
import CidadePesquisa from "../../components/CidadePesquisa/CidadePesquisa";
import SearchIcon from "@mui/icons-material/Search";
import clearNight from "../../assets/img/ClearNightV3.svg";
import Thunderstorms from "../../assets/img/ThunderstormsV2.svg";
import PrevisaoSemana from "../../components/previsãoSemana/PrevisaoSemana";

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
        <div id="mainLayout">
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
                  lorem loremloremv lorem lorem lorem lorem lorem lorem
                  loremlorem loremloremlorem lorem loremlorem lorem
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
        </div>
        <aside id="asideContent">
          <div id="asideMain">
            <div id="tituloAside">
              <h3>Previsão da semana</h3>
            </div>
            <div id="containerDias">
              <div className="linha">
                <PrevisaoSemana
                  dia="Hoje"
                  imgDia={clearNight}
                  tempMaxima="30"
                  tempMinima="21"
                  info="Noite Clara"
                />
                <PrevisaoSemana
                  dia="Amanhã"
                  imgDia={nublado}
                  tempMaxima="25"
                  tempMinima="21"
                  info="Nublado"
                />
              </div>
              <div className="linha">
                <PrevisaoSemana
                  dia="30/01"
                  imgDia={Thunderstorms}
                  tempMaxima="20"
                  tempMinima="19"
                  info="Tempestade"
                />
                <PrevisaoSemana
                  dia="31/01"
                  imgDia={Thunderstorms}
                  tempMaxima="25"
                  tempMinima="19"
                  info="Chuvas rápidas"
                />
              </div>
              <div className="linha">
                <PrevisaoSemana
                  dia="01/02"
                  imgDia={nublado}
                  tempMaxima="30"
                  tempMinima="25"
                  info="Dia Nublado"
                />
                <PrevisaoSemana
                  dia="02/02"
                  imgDia={clearNight}
                  tempMaxima="30"
                  tempMinima="21"
                  info="Noite Clara"
                />
              </div>
            </div>
          </div>
        </aside>
      </main>
    </section>
  );
}
