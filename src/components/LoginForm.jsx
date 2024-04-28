import { useUserContext } from '../hooks/contextHooks';
import useForm from "../hooks/formHooks";

const LoginForm = () => {
    const {handleLogin} = useUserContext();

    const initvals = {
        username: "",
        password: "",
    };

    const doLogin = async () => {
        try {
            handleLogin(inputs);
        } catch (e) {
            alert(e.message);
        }
    };

    const {handleSubmit, handleInputChange, inputs} = useForm(doLogin, initvals);

    console.log(inputs);

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                 <div>
                     <label htmlFor="loginuser">Username</label>
                    <input className="text-black"
                        name="username"
                        type="text"
                        id="loginuser"
                        onChange={handleInputChange}
                        autoComplete="username"
                    />
                </div>
                <div>
                    <label htmlFor="loginpassword">Password</label>
                     <input className="text-black"
                        name="password"
                        type="password"
                        id="loginpassword"
                        onChange={handleInputChange}
                        autoComplete="current-password"
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </>
    );
};

export default LoginForm;