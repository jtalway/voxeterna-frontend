import Layout from "../components/Layout";
import SignupComponent from "../components/auth/SignupComponent";
import Link from "next/link";
import {APP_NAME} from "../config";

const Signup = () => {
  return (
    <Layout>
      <h2 className="text-center pt-4 pb-4">Create an Account with {APP_NAME}</h2>
      <div className="container-fluid">
      <div className="row align-items-center justify-content-center">
        <div className="col-sm-4 pb-5">
          <SignupComponent />
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default Signup;
