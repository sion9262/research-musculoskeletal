import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "../pages/private/dashboard/Dashboard"
import Login from "../pages/public/auth/Login"
import Register from "../pages/public/auth/Register"
import Research from "../pages/public/research/Research"
import PrivateRoute from "./PrivateRoute"

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="login" element={<Login/>}/>
				<Route path="register" element={<Register/>}/>
				<Route path="research" element={<Research/>}/>
				<Route element={<PrivateRoute/>}>
					<Route path="dashboard" element={<Dashboard/>}/>
				</Route>
				<Route path="*" element={<div>NOT FOUND</div>}/>
			</Routes>
		</BrowserRouter>
	)
}
export default Router
