import { Link } from "react-router-dom";
import "./card.css";
import Button from "@mui/material/Button";

export const Card = ({ title, price, image, id }) => {
  return (
    <div className="container-card">
      <img src={image} />
      <div className="card-info">
        <h2 className="card-title">{title}</h2>
        <h3 className="card-price">${price}</h3>
        <Link to={`/itemDetail/${id}`}>
          <Button variant="contained">Ver detalle</Button>
        </Link>
      </div>
    </div>
  );
};
