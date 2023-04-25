import React from 'react';
import "../styles/input.css"
import logo from "../images/logo.png"
import dataPreviews from "./dataPreviews"
import "../styles/dataPreviews.css"
const Timeline = () => {
    return <div>
      <img src={logo} alt="logo" class="absolute top-right"></img>
    <div class="timeline-scroller snaps-inline ">
      <div class="padding-left"></div>
      
      {dataPreviews.map((card)=>{
       return <div class="timeline-group ">
        <div class="timeline-top">Population:{card.population} <br></br> Cost:{card.cost}</div>
        <div class={`line-group flex flex-centre ${card.id===0?"line-group-start":""}`}>
          <div class="circle-group flex">
            <div class="year-text">{card.year}</div>
          </div>
        </div>
        <div class="timeline-bottom flex flex-vertical">
          <div class="card-title">{card.title}</div>
          <div class="card-text">{card.text}</div>
          </div>
      </div>
      })}
      
      </div>
    </div>
  };
  
  export default Timeline;