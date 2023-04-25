import { useParams } from 'react-router-dom';

function Displayed() {
  const { id } = useParams();
  return (
    <div>
      <div className="clk-title">${id}</div>
    </div>
  );
}

export default Displayed;