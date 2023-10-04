import { useContext } from "react";
import { AuthContext } from './../AuthProvider/AuthProvider';
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    if(loading){
       return <h2 className="text-4xl font-semibold my-10" >Loading...</h2>
    }

    if (user) {
        return children
    }

    return <Navigate to="/login" ></Navigate>
};

export default PrivateRoute;