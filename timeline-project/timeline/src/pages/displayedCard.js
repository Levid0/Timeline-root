import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../styles/dataClicked.css"
import dataClicked from "../data/dataClicked"
function Displayed() {
  const { id } = useParams();
  const navigate = useNavigate();
  function handleClick(){
        navigate(`/timeline`)
    }
  return (
    <div>
      <div className="returnButton" onClick={handleClick}>Return (placeholder for icon)</div>
      <div className="clk-title">{dataClicked[id].title}</div>
    </div>
  );
}

export default Displayed;