import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink exact to="/blogger-react-app/">
        <h1 className="title">Blogger</h1>
      </NavLink>
      <div className="nav-links">
        <NavLink
          exact
          to="/blogger-react-app/"
          activeStyle={{ color: "whitesmoke" }}
          activeClassName="active"
          className="nav-link"
        >
          <span>Home</span>
        </NavLink>
        <NavLink
          exact
          to="/blogger-react-app/newblog"
          activeClassName="active"
          activeStyle={{ color: "whitesmoke" }}
          className="nav-link"
        >
          <span>New Blog</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
