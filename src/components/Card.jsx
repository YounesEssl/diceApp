import { useNavigate } from 'react-router-dom';
import './Card.css';

function Card({ size, imageSrc, buttonText, buttonLink }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(buttonLink);
  };

  return (
    <div className={`card card-${size}`}>
      <img src={imageSrc} alt="" className="card-image" />
      <button className="card-button" onClick={handleClick}>{buttonText}</button>
    </div>
  );
}

export default Card;
