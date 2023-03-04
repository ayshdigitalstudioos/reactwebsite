import { Link, useLocation } from "react-router-dom";
import { NavmenuItems } from "./NavmenuItems";

const Navbar = () => {
 const location = useLocation()

  return (
    <header className="header">
      <div className="row m-0">
        <nav className="navbar bg-body-tertiary  fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Offcanvas navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end w-75"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  Offcanvas
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 gap-1">
                  {NavmenuItems.map((item, index) => (
                    <li className="nav-item" key={index}>
                      <Link
                        to={item.title.toLowerCase()}
                        className={
                          location.pathname.split("/")[1] === item.title.toLowerCase()
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
