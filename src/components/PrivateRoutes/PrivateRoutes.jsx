import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    if(loading){
        return <span className="loading loading-dots loading-md"></span>;
    }
    if(user){
        return children;
    }
    return (
        <Navigate to='/login'></Navigate>
    );
};
PrivateRoutes.propTypes={
    children:PropTypes.node,
}


export default PrivateRoutes;