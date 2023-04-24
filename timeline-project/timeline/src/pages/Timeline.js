import React from 'react';
import "../input.css"
import logo from "../images/logo.png"
import dataPreviews from "./data-previews"
const Timeline = () => {
    return <div>
      <img src={logo} alt="logo" class="absolute top-right"></img>
    <div class="timeline-scroller snaps-inline ">
      <div class="padding-left"></div>
      
      {dataPreviews.map((card)=>{
       return <div class="timeline-group ">
        <div class="timeline-top">Population:{card.population} <br></br> Cost:{card.cost}</div>
        <div class={`line-group flex flex-centre ${card.id===0?"line-group-start":""}`}>
          <div class="circle-group">{card.year}</div>
        </div>
        <div class="timeline-bottom">{card.Title}</div>
      </div>
      })}
      
      <div class="timeline-group ">
        <div class="timeline-top">Population and cost and date</div>
        <div class="line-group flex flex-centre ">
          <div class="circle-group"></div>
        </div>
        <div class="timeline-bottom">Clickable thinggggg fhjd il snmdlvknsdv jlnj sdg</div>
      </div>
      <div class="timeline-group ">
        <div class="timeline-top">Population and cost and date</div>
        <div class="line-group flex flex-centre ">
          <div class="circle-group"></div>
        </div>
        <div class="timeline-bottom">Clickable thinggggg fhjd il snmdlvknsdv jlnj sdg</div>
      </div>
      <div class="timeline-group ">
        <div class="timeline-top">Population and cost and date</div>
        <div class="line-group flex flex-centre ">
          <div class="circle-group"></div>
        </div>
        <div class="timeline-bottom">Clickable thinggggg fhjd il snmdlvknsdv jlnj sdg</div>
      </div>
      <div class="timeline-group ">
        <div class="timeline-top">Population and cost and date</div>
        <div class="line-group flex flex-centre ">
          <div class="circle-group"></div>
        </div>
        <div class="timeline-bottom">Clickable thinggggg fhjd il snmdlvknsdv jlnj sdg</div>
      </div>
      <div class="timeline-group ">
        <div class="timeline-top">Population and cost and date</div>
        <div class="line-group flex flex-centre ">
          <div class="circle-group"></div>
        </div>
        <div class="timeline-bottom">Clickable thinggggg fhjd il snmdlvknsdv jlnj sdg</div>
      </div>
      <div class="timeline-group ">
        <div class="timeline-top">Population and cost and date</div>
        <div class="line-group flex flex-centre ">
          <div class="circle-group"></div>
        </div>
        <div class="timeline-bottom">Clickable thinggggg fhjd il snmdlvknsdv jlnj sdg</div>
      </div>
      
      </div>
    </div>
  };
  
  export default Timeline;