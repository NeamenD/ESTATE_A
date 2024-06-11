import { Link } from "react-router-dom";
import "./card.scss";

function Card({ item }) {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.images[0]} alt="" />
      </Link>

      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="./img/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>

        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="./img/bed.png" alt="image logo" />
              <span>{item.bedroom} bedroom</span>
            </div>

            <div className="feature">
              <img src="./img/bath.png" alt="image logo" />
              <span>{item.bedroom} bedroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="../../../public/img/save.png" alt="save icon" />
            </div>
            <div className="icon">
              <img src="../../../public/img/chat.png" alt="chat icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
