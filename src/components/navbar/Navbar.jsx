import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
    const user = true
    return (
        <div className="navbar">
            <div className="navLeft">
                <i className="fa-brands fa-square-facebook topIcon"></i>
                <i className="fa-brands fa-square-instagram topIcon"></i>
                <i className="fa-brands fa-square-pinterest topIcon"></i>
                <i className="fa-brands fa-square-twitter topIcon"></i>
            </div>
            <div className="navMid">
                <ul className="listItems">
                    <li className="listItem">
                        <Link style={{ textDecoration: "none", color: "inherit" }} to={"/"}>HOME</Link>
                    </li>
                    <li className="listItem">
                        <Link style={{ textDecoration: "none", color: "inherit" }} to={"/"}>ABOUT</Link>
                    </li>
                    <li className="listItem">
                        <Link style={{ textDecoration: "none", color: "inherit" }} to={"/"}>CONTACT</Link>
                    </li>
                    <li className="listItem">
                        <Link style={{ textDecoration: "none", color: "inherit" }} to={"/write"}>WRITE</Link>
                    </li>
                    <li className="listItem">
                        {user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="navRight">
                {user ?
                    (<img
                        src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        className="navImg" />) : (
                        <ul className="listItems">
                            <li className="listItem">
                                <Link style={{ textDecoration: "none", color: "inherit" }} to={"/login"}>LOGIN</Link>
                            </li>
                            <li className="listItem">
                                <Link style={{ textDecoration: "none", color: "inherit" }} to={"/register"}>REGISTER</Link>
                            </li>


                        </ul>
                    )}

                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default Navbar