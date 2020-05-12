import {useState, useEffect} from "react";
import jwt from "jsonwebtoken";
import Layout from "../../../../components/Layout";
import {withRouter} from "next/router";
import {signup} from "../../../../actions/auth";

const ActivateAccount = ({router}) => {
	// CREATE STATE
	const [values, setValues] = useState({
		name: "",
		token: "",
		error: "",
		loading: false,
		message: false,
		showButton: true
	});

	// DESTRUCTURE
	const {name, token, error, loading, message, showButton} = values;

	// make name and token available in state
	useEffect(() => {
		// save the token and name
		let token = router.query.id;
		// decode if we have token
		if(token) {
			const {name} = jwt.decode(token);
			setValues({...values, name, token});
		}
	}, [router])

	// METHODS
	const clickSubmit = e => {
		e.preventDefault;
		setValues({...values, loading: true, error: false});
		// make request to signup endpoing using user info in token
		signup({token}).then(data => {
			if(data.error) {
				setValues({...values, error: data.error, loading: false, showButton: false});
			} else {
				setValues({...values, loading: false, message: data.message, showButton: false});
			}
		});
	};
	
	// SHOW LOADING
	const showLoading = () => loading ? (<h2>Loading...</h2>) : "";

	// SHOW ERROR
	const showError = () => (
		error ? <div className="alert alert-danger">{error}</div> : ""
	);
	// SHOW SUCCESS
	const showMessage = () => (
		message ? <div className="alert alert-success">{message}</div> : ""
	);
	

	// RETURN
	return (
		<Layout>
			<div className="container">
				<h2>Hello {name}! Are you ready to activate your account?</h2>
				<hr />
				{showLoading()}
				{showError()}
				{showMessage()}
				{showButton && (
					<button 
						className="btn btn-outline-primary mb-4"
						onClick={clickSubmit}>
							Activate Account
					</button>
				)}
			</div>
		</Layout>
	);

}


export default withRouter(ActivateAccount);