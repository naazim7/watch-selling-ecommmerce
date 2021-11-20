import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
	return (<>
		
		<div className="bg-error">
			<h1 className="text-center large-txt">404!!</h1>
			<h1 className="text-center text-danger ">Not Found</h1>
			<div className="d-flex justify-content-center align-items-center my-5">
				<Link to="/">
					<button className="btn btn-primary text-center ">
						Go To HomePage
					</button>
				</Link>
			</div>
		</div>
	
		</>
	);
};

export default Error;
