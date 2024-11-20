import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CartWidget = () => {
  const { getTotalUnits } = useContext(CartContext);

  let totalUnidades = getTotalUnits();

  return (
    <div>
      <Link to="/cart">
        <Badge badgeContent={totalUnidades} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </Link>
    </div>
  );
};
