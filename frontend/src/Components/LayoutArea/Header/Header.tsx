import { NavLink } from "react-router-dom";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">
			<h1>Shop Gourmet Glatt!</h1>
            <NavLink to={"/add"}>Add</NavLink>
            <span>|</span>
            <NavLink to={"/delete"}>Delete</NavLink>
            <span>|</span>
            <NavLink to={"/edit"}>Edit</NavLink>
        </div>
    );
}

export default Header;
