import logo from "../images/logo.png"
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    function navigateTimeline(){
        navigate("/timeline")
    }
    return <div class="flex flex-vertical flex-centre centre flex-gap centre" onClick={navigateTimeline}>
        <div class="title">Immigration Detention Timeline</div>
        <div style={{fontSize: "150%"}}>with</div>
        <img src={logo} alt="logo" class="logo-intro"></img>
    </div>;
  };
  
  export default Home;