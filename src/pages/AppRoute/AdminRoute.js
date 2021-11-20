import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../components/hooks/useAuth";



const AdminRoute=(props)=> {
	const { children, ...rest } = props;

	const { user,loading,admin } = useAuth();
	

	if (loading) {
		return (
			<div className="text-center my-5 py-5">
				<Spinner animation="border" role="status">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			</div>
		);
	}

	return (
		<Route
			{...rest}
			render={({ location }) =>
				user.email && admin ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/",
							state: { from: location }
						}}
					/>
				)
			}
		/>
	);
}

export default AdminRoute;