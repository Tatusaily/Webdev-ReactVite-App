import { useAuthentication } from "../hooks/apiHooks";
import useForm from "../hooks/formHooks";

const LoginForm = () => {
    const {login} = useAuthentication();

    const initvals = {
        username: "",
        password: "",
    };

    const logins = async () => {
        console.log(inputs);
        const result = await login(inputs);
        console.log(result);
    };

    const {handleSubmit, handleInputChange, inputs} = useForm(login, initvals);

    console.log(inputs);

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                 <div>
                     <label htmlFor="loginuser">Username</label>
                    <input
                        name="username"
                        type="text"
                        id="loginuser"
                        onChange={handleInputChange}
                        autoComplete="username"
                    />
                </div>
                <div>
                    <label htmlFor="loginpassword">Password</label>
                     <input
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