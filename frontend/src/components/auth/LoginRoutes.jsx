import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const LoginRoutes = () => {
   const {userInfo} = useSelector(state => state.auth)
   return userInfo ? <Outlet /> : <Navigate to='/' replace />;
}
 
export default LoginRoutes;