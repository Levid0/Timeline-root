import React from 'react';
import "../styles/input.css"
import logo from "../images/logo.png"
import dataPreviews from "./dataPreviews"
import "../styles/dataPreviews.css"
import { useNavigate } from 'react-router-dom';

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
        <div className="timeline-top">Population:{card.population} <br></br> Cost:{card.cost}</div>
        <div className={`line-group flex flex-centre ${card.id===0?"line-group-start":""}`}>
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