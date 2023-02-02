import React, { useEffect, useState } from "react";
import "./home.css";
import nublado from "../../assets/img/nublado.svg";
import CidadePesquisa from "../../components/CidadePesquisa/CidadePesquisa";
import SearchIcon from "@mui/icons-material/Search";
import clearNight from "../../assets/img/ClearNightV3.svg";
import Thunderstorms from "../../assets/img/ThunderstormsV2.svg";
import PrevisaoSemana from "../../components/previsãoSemana/PrevisaoSemana";
import AirIcon from '@mui/icons-material/Air';
import WaterIcon from '@mui/icons-material/Water';
import CompressIcon from '@mui/icons-material/Compress';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

export default function Home() {
  const key = "";
  const [cidadePesquisar, setCidade] = useState("");

  const [nomeCidade, setNomeCidade] = useState("");
  const [pais, setPais] = useState("");
  const [temp, setTemp] = useState("");
  const [tempMax, setTempMax] = useState("");
  const [tempMin, setTempMin] = useState("");
  const [descricao, setDescricao] = useState("");
  const [umidade, setUmidade] = useState("");
  const [pressao, setPressao] = useState("")
  const [vento, setVento] = useState("")
  const [sensacaoTerm, setSensacaoTerm] = useState("")
  const [icone, setIcone] = useState("")

  let cidades = []

  function pegarArr() {
    console.log(cidades)
  }
  const getCidadePadrao = async () => {
    const cidadeInicial = 'São Paulo'
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${cidadeInicial}&units=metric&appid=${key}&lang=pt_br`;
    const res = await fetch(api);
    const data = await res.json();

    const cidadePadrao = {
      nome: data.name,
      pais: data.sys.country,
      tempAtual: data.main.temp,
      tempMax: data.main.temp_max,
      tempMin: data.main.temp_min,
      umidade: data.main.humidity,
      pressao: data.main.pressure,
      vento: data.wind.speed,
      sensacaoTermica: data.main.feels_like,
      descricao: data.weather[0].description,
      icone: data.weather[0].icon,

    };

    cidades.unshift(cidadePadrao)

    setNomeCidade(cidades[0].nome)
    setPais(cidades[0].pais)
    setTemp(cidades[0].tempAtual)
    setDescricao(cidades[0].descricao)
    setUmidade(cidades[0].umidade)
    setPressao(cidades[0].pressao)
    setVento(cidades[0].vento)
    setSensacaoTerm(cidades[0].sensacaoTermica)
    setTempMax(cidades[0].tempMax)
    setTempMin(cidades[0].tempMin)
    setIcone(`https://openweathermap.org/img/wn/${cidades[0].icone}.png`)
  }

  useEffect(() => {
  getCidadePadrao()
  }, [])
  
  const getWeather = async () => {
    console.log("iniciando");
    
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${cidadePesquisar}&units=metric&appid=${key}&lang=pt_br`;

    const res = await fetch(api);
    const data = await res.json();
    const cidadeAdd = {
      nome: data.name,
      pais: data.sys.country,
      tempAtual: data.main.temp,
      tempMax: data.main.temp_max,
      tempMin: data.main.temp_min,
      umidade: data.main.humidity,
      pressao: data.main.pressure,
      vento: data.wind.speed,
      sensacaoTermica: data.main.feels_like,
      descricao: data.weather[0].description,
      icone: data.weather[0].icon,
    };
    console.log(data)
    cidades.unshift(cidadeAdd)

    setNomeCidade(cidades[0].nome)
    setPais(cidades[0].pais)
    setTemp(cidades[0].tempAtual)
    setDescricao(cidades[0].descricao)
    setUmidade(cidades[0].umidade)
    setPressao(cidades[0].pressao)
    setVento(cidades[0].vento)
    setTempMax(cidades[0].tempMax)
    setTempMin(cidades[0].tempMin)
    setSensacaoTerm(cidades[0].sensacaoTermica)
    setIcone(`https://openweathermap.org/img/wn/${cidades[0].icone}.png`)
    pegarArr()


  };

  return (
    <section id="sectionHome" className="nublado" >
      <nav id="header">
        <div id="pesquisa">
          <div id="containerPesquisar">
            <input
              id="inputPesquisa"
              placeholder="Pesquisar por local"
              name="pesquisarCidade"
              value={cidadePesquisar}
              onChange={(e) => setCidade(e.target.value)}
            />
            <label id="label" onClick={getWeather} >
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
              <h1>{nomeCidade}, {pais}</h1>
            </div>
            <div id="temperaturaContainer">
              <div id="temperaturaContent">
                <img id="nublado" src={icone} />
                <h1 id="txtTemperatura">{temp}°C</h1>
              </div>
              <div id="mensagemClimaContainer">
                <h1>{descricao}</h1>
                <p id='sensacaoTermicaTxt'>Sensação Térmica {sensacaoTerm}°C</p>
              </div>
            </div>
            <div id="mensagemDiaContainer">
            <div id='tempMaxMin'>
                <div className='itemContent'>
                  <KeyboardDoubleArrowUpIcon/> 
                  <p>Temperatura máxima: {tempMax}</p>
                </div>
                <div className='itemContent'>
                  <KeyboardDoubleArrowDownIcon/> 
                  <p>Temperatura Mínima: {tempMin}</p>
                </div>
              </div>
              
            </div>
            <div id="informacoesContainer">
              <div className="itemsInfo">
                  <p>VENTO</p>
                  <div className="itemContent">
                    <AirIcon/> 
                    <p>{vento}km/h</p>
                  </div>
              </div>
              <div className="itemsInfo">
                <p>ÚMIDADE</p>
                <div className="itemContent">
                    <WaterIcon/> 
                    <p>{umidade}%</p>
                  </div>
              </div>
              <div className="itemsInfo">
                <p>PRESSÃO</p>
                <div className="itemContent">
                    <CompressIcon/> 
                    <p>{pressao}mb</p>
                  </div>
    
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
