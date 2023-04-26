import logo from "../images/logo.png"
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    function navigateTimeline(){
        navigate("/timeline")
    }
    return <div className="flex flex-vertical flex-centre centre flex-gap centre" onClick={navigateTimeline}>
        <div className="title">Immigration Detention Timeline</div>
        <div style={{fontSize: "150%"}}>with</div>
        <img src={logo} alt="logo" className="logo-intro"></img>
        <div className="blink click-instructions">Please click anywhere to continue</div>
    </div>;
  };
  
  export default Home;