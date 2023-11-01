import Logo from "../assets/coffee.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="row">
          <div className="col">
            <Link to="/home">
              <nav className="bar">
                <div className="container">
                  <a href="#">
                    <img
                      src={Logo}
                      alt="Logo"
                      width={"20"}
                      height={"25"}
                      className="d-inline-block align-text-top"
                    />
                    Caféteria
                  </a>
                </div>
              </nav>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
