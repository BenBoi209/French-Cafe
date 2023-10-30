import Logo from "../assets/coffee.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="row">
          <div className="col">
            <Link to="/home">
              <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                  <a className="navbar-brand" href="#">
                    <img
                      src={Logo}
                      alt="Logo"
                      width={"30"}
                      height={"30"}
                      className="d-inline-block align-text-top"
                    />
                    Cafeteria
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
