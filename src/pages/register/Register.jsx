import { Link } from 'react-router-dom'
import './register.css'
import { useState } from 'react'
import AxiosService from '../../utils/AxiosService'
import ApiRoutes from '../../utils/ApiRoutes'
import { toast } from 'react-toastify'
function Register() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await AxiosService.post(ApiRoutes.REGISTER.path, {
                username, email, password
            })
            response.data && window.location.replace("/login")
            toast.success(response.data.message);
        } catch (error) {
            toast.error(error.response.data.message || error.message)
        }

    }

    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input className="registerInput"
                    type="text"
                    placeholder="Enter your username..."
                    onChange={e => setUsername(e.target.value)} />
                <label>Email</label>
                <input className="registerInput"
                    type="text"
                    placeholder="Enter your email..."
                    onChange={e => setEmail(e.target.value)} />
                <label>Password</label>
                <input className="registerInput"
                    type="password"
                    placeholder="Enter your password..."
                    onChange={e => setPassword(e.target.value)} />
                <button className="registerButton" type='submit'>Register</button>
            </form>
            <button className="registerLoginButton">
                <Link style={{ textDecoration: "none", color: "inherit" }} to={"/login"}>Login</Link>
            </button>
        </div>
    )
}

export default Register