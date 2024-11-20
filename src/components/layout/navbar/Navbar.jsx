import { Link } from "react-router-dom";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="container-navbar">
        <Link to="/">
          <img
            className="logo-img"
            src="https://res.cloudinary.com/dyd6ojf23/image/upload/v1728525791/logo-bufalo_jt9izc.png"
            alt="logo"
          />
        </Link>
        <ul>
          <Link to="/">Inicio</Link>
          <Link to="/category/Para Asado">Para Asado</Link>
          <Link to="/category/Para Calefacción">Para Calefacción</Link>
          <Link to="/">Contacto</Link>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};
