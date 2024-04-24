import {useUser} from "../hooks/apiHooks";
import {useState, useEffect} from "react";

const Profile = () => {
    const {getUserByToken} = useUser();
    const [user, setUser] = useState(null);

    const getUser = async () => {
        try {
            const token = localStorage.getItem("token");
            const user = await getUserByToken(token);
            setUser(user.user);
        } catch (e) {
            console.error(e.message);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <>
        <div className="bg-slate-600 p-4 rounded-xl m-2">
            {user && (
                <>
                <h1>Profile</h1>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Created: {user.created_at}</p>
                <p>Level: {user.level_name}</p>
                </>
            )}
        </div>
        </>
    );
};

export default Profile;