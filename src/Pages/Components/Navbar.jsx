import { Link } from "react-router-dom";
import { NavmenuItems } from "./NavmenuItems";

const Navbar = () => {


  return (
    <header className="header">
      <div className="row m-0">
        <div className="col-lg-4">Logo</div>
        <div className="col-lg-4">
          {NavmenuItems.map((item, index) => (
            <Link key={index} to={item.title.toLowerCase()}>
              {item.title}
            </Link>
          ))}
        </div>
        <div className="col-lg-4">Icon</div>
      </div>
    </header>
  );
};

export default Navbar;
