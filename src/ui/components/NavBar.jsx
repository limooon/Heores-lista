import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  //SE USA EN HOOK para establecer la comunicacion de navegacion entre componetes
  const navigate = useNavigate();
  const Logout = () => {
    navigate("/Login", {
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand text-xl text-white mr-5 ml-5" to="/">
        A
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav flex gap-5 text-xl text-white">
          <NavLink
            className={({isActive}) => isActive ? "border-b-2  border-teal-300": null}
            activeclassname="active" // Cambia activeClassName a activeclassname
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({isActive}) => isActive ? "border-b-2  border-teal-300": null}
            activeclassname="active" // Cambia activeClassName a activeclassname
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            className={({isActive}) => isActive ? "border-b-2  border-teal-300": null}
            activeclassname="active" // Cambia activeClassName a activeclassname
            to="/serch"
          >
            Buscador
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <NavLink
            className="nav-item nav-link mr-6 text-xl"
            activeclassname="active" // Cambia activeClassName a activeclassname
            to="/Login"
          >
            <button onClick={Logout} className="btn btn-primary text-lg">
              Logouth
            </button>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};
