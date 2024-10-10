import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="container-navbar">
        <img
          className="logo-img"
          src="https://res.cloudinary.com/dyd6ojf23/image/upload/v1728525791/logo-bufalo_jt9izc.png"
          alt="logo"
        />
        <ul>
          <li>Inicio</li>
          <li>Leña</li>
          <li>Carbón</li>
          <li>Contacto</li>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};
