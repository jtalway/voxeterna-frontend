import {useState} from "react";
import Layout from "../../../components/Layout";
import {forgotPassword} from "../../../actions/auth";


// CREATE COMPONENT
const ForgotPassword = () => {
	// CREATE STATE
	const [values, setValues] = useState({
		email: "",
		message: "",
		error: "",
		showForm: true
	});

	// DESTRUCTURE
	const {email, message, error, showForm} = values;

	// METHODS 1 of 2
	// grab name then event
	const handleChange = name => e => {
		setValues({...values, message: "", error: "", [name]: e.target.value});
	};

	// METHODS 2 of 2
	const handleSubmit = e => {
		// stop default behavior
		e.preventDefault();
		setValues({...values, message: "", error: ""});
		// pass email object to /actions/auth.js
		forgotPassword({email}).then(data => {
			if(data.error) {
				setValues({...values, error: data.error});
			} else {
				setValues({...values, message: data.message, email: "", showForm: false});
			}
		});
	};

	// SHOW ERROR
	const showError = () => (
		error ? <div className="alert alert-danger">{error}</div> : ""
	);
	// SHOW SUCCESS
	const showMessage = () => (
		message ? <div className="alert alert-success">{message}</div> : ""
	);

	// PASSWORD FORGOT FORM
	const passwordForgotForm = () => (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<div className="form-group pt-5">
					<input 
						type="email" 
						onChange={handleChange("email")} 
						className="form-control"
						value={email}
						placeholder="Email"
						required
					/>
				</div>
				<div>
					<button className="btn btn-primary">Send Password Reset Link</button>
				</div>
			</form>
		</div>
	);
	
	// RETURN
	return (
		<Layout>
			<div className="container pb-5">
				<h2>Forgot Password</h2>
				<hr />
				<p>Please enter the email address associated with your account.</p>
				{showError()}
				{showMessage()}
				{showForm && passwordForgotForm()}
			</div>
		</Layout>
	);
};

export default ForgotPassword;