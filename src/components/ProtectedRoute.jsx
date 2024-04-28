// ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../hooks/contextHooks';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
    const { user } = useUserContext();

    if (!user) {
        return <Navigate to="/" />;
    }

    return children;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute;