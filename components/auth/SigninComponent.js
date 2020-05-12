import {useState, useEffect} from "react";
import {signin, authenticate, isAuth} from "../../actions/auth";
import Router from "next/router";
import Link from "next/link";
import { Button } from "reactstrap";
import LoginGoogle from "./LoginGoogle";

const SigninComponent = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    message: "",
    showForm: true
  });

  const {email, password, error, loading, message, showForm} = values;

  useEffect (() => {
    isAuth() && Router.push(`/`);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    setValues({...values, loading: true, error: false});
    const user = {email, password};

    signin(user).then(data => {
      if(data.error) {
        setValues({...values, error: data.error, loading: false})
      } else {
        // save user token to cookie
        // save user info to localstorage
        //authenticate user
        authenticate(data, () => {
          if(isAuth() && isAuth().role == 1) {
            Router.push(`/admin`);
          } else {
            Router.push(`/user`);
          }
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

  const signinForm = () => {
    return (
      <form onSubmit={handleSubmit}>
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

        <div>
          <Button color="primary" block>Sign In</Button>
        </div>
      </form>
    );
  };

  return (
    <React.Fragment>
      {showError()}
      {showLoading()}
      {showMessage()}
      <LoginGoogle/>
      {showForm && signinForm()}
      <br/>
      <div className="text-center">
        <div className="pb-3">If you're new here, please {" "}
          <Link href="/signup">
            <a>Create Account</a>
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

export default SigninComponent;
