import {useState, useEffect} from "react";
import {signup, isAuth, preSignup} from "../../actions/auth";
import Router from "next/router";
import Link from "next/link";
import { Button } from "reactstrap";

const SignupComponent = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    loading: false,
    message: "",
    showForm: true
  });

  const {name, email, password, error, loading, message, showForm} = values;

  useEffect (() => {
    isAuth() && Router.push(`/`);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    setValues({...values, loading: true, error: false});
    const user = {name, email, password};

    preSignup(user).then(data => {
      if(data.error) {
        setValues({...values, error: data.error, loading: false})
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          loading: false,
          message: data.message,
          showForm: false
        });
      }
    });
  };

  const handleChange = name => e => {
    setValues({...values, error: false, [name]: e.target.value});
  };

  const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '');
  const showError = () => (error ? <div className="alert alert-danger">{error}</div> : '');
  const showMessage = () => (message ? <div className="alert alert-info">{message}</div> : '');

  const signupForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            value={name}
            onChange={handleChange("name")}
            type="text"
            className="form-control"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <input
            value={email}
            onChange={handleChange("email")}
            type="email"
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            value={password}
            onChange={handleChange("password")}
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <div className="text-muted text-center">
          By clicking 'Create Account' you agree to the Privacy Policy.
        </div>
        <div>
          <Button className="mt-3" color="primary" block>Create Account</Button>
        </div>
      </form>
    );
  };

  return (
    <React.Fragment>
        {showError()}
        {showLoading()}
        {showMessage()}
        {showForm && signupForm()}
        <br/>
        <div className="text-center">
        <div className="pb-3">If you have an account, please {" "}
          <Link href="/signin">
            <a>Sign in</a>
          </Link>
        </div>
        <div>
          <Link href="/auth/password/forgot">
            <a>Forgot Password</a>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignupComponent;
