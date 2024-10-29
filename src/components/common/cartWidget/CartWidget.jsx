import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  return (
    <div>
      <Link to="/cart">
        <FaCartShopping />
        <span>0</span>
      </Link>
    </div>
  );
};
