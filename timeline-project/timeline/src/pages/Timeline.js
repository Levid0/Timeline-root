import React from 'react';
import "../styles/input.css"
import logo from "../images/logo.png"
import dataPreviews from "../data/dataPreviews"
import "../styles/dataPreviews.css"
import { useNavigate } from 'react-router-dom';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import dataPop from "../graphDataWork/dataPop.ts"
import dataCost from "../graphDataWork/dataCost.ts"
import options from "../graphDataWork/options.ts"

import "../styles/graphStyles.css"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Timeline = () => {
  const navigate = useNavigate();
  function handleClick(id){
        navigate(`/timeline/${id}`)
    }
  
    return <div>
      <img src={logo} alt="logo" className="absolute top-right"></img>
    <div className="timeline-scroller snaps-inline ">
      <div className="padding-left"></div>
      
      {dataPreviews.map((card)=>{
       return <div className="timeline-group " key={card.id}>
        <div className="timeline-top graph-container"> 
        <div><Bar className='graph-individual' options={options} data={dataPop(card.id)} /></div>
        <div><Bar className='graph-individual' options={options} data={dataCost(card.id)}/></div>
        </div>
        <div className={`line-group flex flex-centre ${card.id===0?"line-group-start":""}`}>
        <div className="circle-shadow"></div>
          <div className="circle-group flex">
            <div className="year-text">{card.year}</div>
          </div>
        </div>
        <div className="timeline-bottom flex flex-vertical" key={card.id} onClick={() => handleClick(card.id)}>
          <div className="card-title">{card.title}</div>
          <div className="card-text">{card.text}</div>
          </div>
      </div>
      })}
      
      </div>
    </div>
  };
  
  export default Timeline;