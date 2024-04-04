import { Link } from 'react-router-dom'
import './navbar.css'
import { useContext } from 'react'
import { Context } from '../../context/Context'

function Navbar() {
    const { user, dispatch } = useContext(Context)
    console.log(user);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }

    return (
        <div className="navbar">
            <div className="navLeft">
                <a href="https://www.linkedin.com/in/priyadharshini-thirunavukkarasu-b1b615b4/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-square-facebook topIcon" onClick="window.location.href='https://www.linkedin.com/in/priyadharshini-thirunavukkarasu-b1b615b4/'"></i>
                </a>
                <a href="https://www.linkedin.com/in/priyadharshini-thirunavukkarasu-b1b615b4/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-square-instagram topIcon" onClick="window.location.href='https://www.linkedin.com/in/priyadharshini-thirunavukkarasu-b1b615b4/'"></i>
                </a>
                <a href="https://www.linkedin.com/in/priyadharshini-thirunavukkarasu-b1b615b4/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-square-pinterest topIcon" onClick="window.location.href='https://www.linkedin.com/in/priyadharshini-thirunavukkarasu-b1b615b4/'"></i>
                </a>
                <a href="https://www.linkedin.com/in/priyadharshini-thirunavukkarasu-b1b615b4/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-square-twitter topIcon" onClick="window.location.href='https://www.linkedin.com/in/priyadharshini-thirunavukkarasu-b1b615b4/'"></i>
                </a>

            </div>
            <div className="navMid">
                <ul className="listItems">
                    <li className="listItem">
                        <Link style={{ textDecoration: "none", color: "inherit" }} to={"/"}>HOME</Link>
                    </li>
                    <li className="listItem">
                        <Link style={{ textDecoration: "none", color: "inherit" }} to={"/about"}>ABOUT</Link>
                    </li>

                    <li className="listItem">
                        <Link style={{ textDecoration: "none", color: "inherit" }} to={"/write"}>WRITE</Link>
                    </li>
                    <li className="listItem" onClick={handleLogout}>
                        {user && "LOGOUT"}</li>
                </ul>
            </div>
            {/*  <div className="navRight">
                {user ?
                    (
                        <Link to={`/settings/${user.others._id}`}> <img
                            src={user.others.profilePic}
                            alt=""
                            className="navImg" /></Link>) : (
                        <ul className="listItems">
                            <li className="listItem">
                                <Link style={{ textDecoration: "none", color: "inherit" }} to={"/login"}>LOGIN</Link>
                            </li>
                            <li className="listItem">
                                <Link style={{ textDecoration: "none", color: "inherit" }} to={"/register"}>REGISTER</Link>
                            </li>
                        </ul>
                    )}

                <i className="fa-solid fa-magnifying-glass"></i>
            </div> */}
            <div className="navRight">
                {user ? (<p style={{ fontWeight: "200px", fontSize: "20px" }}>Welcome <b style={{ color: "teal" }}> {user.others.username}</b></p>) :
                    (<ul className="listItems">
                        <li className="listItem">
                            <Link style={{ textDecoration: "none", color: "inherit" }} to={"/login"}>LOGIN</Link>
                        </li>
                        <li className="listItem">
                            <Link style={{ textDecoration: "none", color: "inherit" }} to={"/register"}>REGISTER</Link>
                        </li>
                    </ul>)}

            </div>
        </div>
    )
}

export default Navbar