import {useState} from "react";
import Layout from "../../../../components/Layout";
import {withRouter} from "next/router";
import {resetPassword} from "../../../../actions/auth";

// CREATE COMPONENT
const ResetPassword = ({router}) => {
	// CREATE STATE
	const [values, setValues] = useState({
		name: "",
		newPassword: "",
		error: "",
		message: "",
		showForm: true
	});

	// DESTRUCTURE
	const {showForm, name, newPassword, error, message} = values;

	// METHODS
	// grab name then event
	const handleSubmit = e => {
		// stop default behavior
		e.preventDefault();
		// .id because file is [id].js
		// pass info to /actions/auth.js
		resetPassword({
			newPassword,
			resetPasswordLink: router.query.id
		})
		// get the data response
		.then(data => {
			if(data.error) {
				setValues({...values, error: data.error, showForm: false, newPassword: ""});
			} else {
				setValues({...values, message: data.message, showForm: false, newPassword: "", error: false});
			}
		})
	};

	// SHOW ERROR
	const showError = () => (
		error ? <div className="alert alert-danger">{error}</div> : ""
	);
	// SHOW SUCCESS
	const showMessage = () => (
		message ? <div className="alert alert-success">{message}</div> : ""
	);

	// PASSWORD RESET FORM
	const passwordResetForm = () => (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<div className="form-group pt-5">
					<input 
						type="password" 
						onChange={e => setValues({...values, newPassword: e.target.value})} 
						className="form-control"
						value={newPassword}
						placeholder="Type new password"
						required
					/>
				</div>
				<div>
					<button className="btn btn-primary">Change Password</button>
				</div>
			</form>
		</div>
	);

	// RETURN
	return (
		<Layout>
			<div className="container pb-5">
				<h2>Reset Password</h2>
				<hr />
				{showError()}
				{showMessage()}
				{passwordResetForm()}
			</div>
		</Layout>
	);





};

export default withRouter(ResetPassword);


