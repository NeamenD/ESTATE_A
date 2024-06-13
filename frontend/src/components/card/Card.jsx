import { Link } from "react-router-dom";
import "./card.scss";

function Card({ item, onDelete }) {
  const handleDeleteClick = async () => {
    try {
      await onDelete(item.id); // Call onDelete with item.id
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.images[0]} alt={item.title} />
      </Link>

      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="./img/pin.png" alt="pin icon" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>

        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="./img/bed.png" alt="bed icon" />
              <span>{item.bedroom} bedroom</span>
            </div>

            <div className="feature">
              <img src="./img/bath.png" alt="bath icon" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon" onClick={handleDeleteClick}>
              <img src="/img/trash.png" alt="trash icon" />
            </div>
            <div className="icon">
              <img src="/img/save.png" alt="save icon" />
            </div>
            <div className="icon">
              <img src="/img/chat.png" alt="chat icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
