import { Navigate } from "react-router-dom";
import { useAuthentication } from "../hooks/apiHooks";
import useForm from "../hooks/formHooks";

const RegisterForm = () => {
    const {postlogin} = useAuthentication();

    const initvals = {
        username: "",
        password: "",
    };

    const doRegister = async () => {
        console.log(inputs);
        const result = await postlogin(inputs);
        localStorage.setItem("token", result.token);
        console.log("RESULT", result)
        console.log("TOKEN:", result.token);
        if (result) {
            // ei toimi
            return <Navigate to="/" />;
        }
    };

    const {handleSubmit, handleInputChange, inputs} = useForm(doRegister, initvals);

    console.log(inputs);

    return (
        <>
            <h1>Register</h1>
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
                <div>
                    <label htmlFor="loginemail">Email</label>
                        <input className="text-black"
                            name="email"
                            type="email"
                            id="loginemail"
                            onChange={handleInputChange}
                            autoComplete="email"
                        />
                </div>
                <button type="submit">Login</button>
            </form>
        </>
    );
};

export default RegisterForm;