import { useUserContext } from "../hooks/contextHooks";

const Logout = () => {
    const { handleLogout } = useUserContext();
    try {
        handleLogout();
    } catch (e) {
        alert(e.message);
    }
  };
  
  export default Logout;