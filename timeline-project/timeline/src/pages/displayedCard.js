import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../styles/dataClicked.css"
import dataClicked from "../data/dataClicked"
import exitIcon from "../images/exit-icon.svg"
function Displayed() {
  const { id } = useParams();
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/timeline`)
  }
  return (
    <div>
      <div onClick={handleClick}><img className="returnButton" src={exitIcon} alt="exit icon placeholder"></img></div>
      <div className="clk-body">
        <div className="clk-title">{dataClicked[id].title}</div>
        <div className="clk-mainText">{dataClicked[id].text}</div>
      </div>
    </div>
  );
}

export default Displayed;