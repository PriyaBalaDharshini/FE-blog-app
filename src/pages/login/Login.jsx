import { Link } from 'react-router-dom';
import './login.css'
import { useContext, useRef } from 'react';
import { Context } from '../../context/Context';
import { toast } from 'react-toastify';
import AxiosService from '../../utils/AxiosService';
import ApiRoutes from '../../utils/ApiRoutes';

function Login() {
    const emailRef = useRef("")
    const passwordRef = useRef("")
    const { dispatch, isFetching } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({ type: "LOGIN_START" })
        try {
            const response = await AxiosService.post(ApiRoutes.LOGIN.path, {
                email: emailRef.current.value,
                password: passwordRef.current.value
            });
            toast.success(response.data.message)
            if (response.data) {
                response.data && window.location.replace("/")
                dispatch({ type: "LOGIN_SUCCESS", payload: response.data })
            }
        } catch (error) {
            dispatch({ type: "LOGIN_FAILURE" })
            toast.error(error.message);
        }
    }

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                    className="loginInput"
                    type="text"
                    placeholder="Enter your email..."
                    ref={emailRef} />
                <label>Password</label>
                <input
                    className="loginInput"
                    type="password"
                    placeholder="Enter your password..."
                    ref={passwordRef} />
                <button className="loginButton" type='submit' disabled={isFetching}>Login</button>
            </form>
            <button className="loginRegisterButton">
                <Link style={{ textDecoration: "none", color: "inherit" }} to={"/register"}>Register</Link>
            </button>
        </div>
    );
}

export default Login