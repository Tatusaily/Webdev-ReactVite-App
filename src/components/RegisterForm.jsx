import { Navigate } from "react-router-dom";
import {useUser, useAuthentication} from "../hooks/apiHooks";
import useForm from "../hooks/formHooks";

const RegisterForm = () => {
    const {postUser} = useUser();
    const {postlogin} = useAuthentication();

    const initvals = {
        username: "",
        password: "",
    };

    const doRegister = async () => {
        console.log(inputs);
        const result = await postUser(inputs);
        console.log("REG RESULT", result);
        if (result) {
            const result = await postlogin(inputs);
            localStorage.setItem("token", result.token);
            console.log("LOG RESULT", result);
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
                     <label htmlFor="registeruser">Username</label>
                    <input className="text-black"
                        name="username"
                        type="text"
                        id="registeruser"
                        onChange={handleInputChange}
                        autoComplete="username"
                    />
                </div>
                <div>
                    <label htmlFor="registerpassword">Password</label>
                     <input className="text-black"
                        name="password"
                        type="password"
                        id="registerpassword"
                        onChange={handleInputChange}
                        autoComplete="current-password"
                    />
                </div>
                <div>
                    <label htmlFor="registeremail">Email</label>
                        <input className="text-black"
                            name="email"
                            type="email"
                            id="registeremail"
                            onChange={handleInputChange}
                            autoComplete="email"
                        />
                </div>
                <button type="submit">Register</button>
            </form>
        </>
    );
};

export default RegisterForm;