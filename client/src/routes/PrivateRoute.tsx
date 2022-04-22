import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
	const isLogin = false;
	if (!isLogin)	{
		return <Navigate to="/login" replace/>
	}
	return <Outlet/>
}
export default PrivateRoute;
