import { Navigate, Outlet,} from "react-router-dom";

function PrivateRoute() {
  const isLogin = localStorage.getItem('token') !== null;
  return isLogin ? <Outlet/> : <Navigate to="FormLogin"/>;
}

export default PrivateRoute;
