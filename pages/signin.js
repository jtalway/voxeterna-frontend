import Layout from "../components/Layout";
import SigninComponent from "../components/auth/SigninComponent";
import Link from "next/link";
import {withRouter} from "next/router";
import {APP_NAME} from "../config";

const Signin = ({router}) => {
  const showRedirectMessage = () => {
    if(router.query.message) {
      return <div className="alert alert-danger">{router.query.message}</div>;
    } else {
      return;
    }
  };

  return (
    <Layout>
    <h2 className="text-center pt-4 pb-4">Sign in to {APP_NAME}</h2>
    <div className="container-fluid">
    <div className="row align-items-center justify-content-center">
      <div className="col-sm-4">
        {showRedirectMessage()}
      </div>
    </div>

    <div className="row align-items-center justify-content-center">
      <div className="col-sm-4 text-center pb-5">
        <SigninComponent />
        <br/>
      </div>
    </div>
    </div>
    </Layout>
  );
};

export default withRouter(Signin);
