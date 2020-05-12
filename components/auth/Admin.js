import {useEffect} from "react";
import Router from "next/router";
import {isAuth} from "../../actions/auth";

const Admin = ({children}) => {
  useEffect(() => {
    // if they don't have access redirect to signin
    if(!isAuth()) {
      Router.push(`/signin`);
    } else if (isAuth().role !== 1) {
      Router.push(`/`);
    }
  }, []);
  // otherwise, render children props
  return <React.Fragment>{children}</React.Fragment>;
};

export default Admin;
