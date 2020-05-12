import {useEffect} from "react";
import Router from "next/router";
import {isAuth} from "../../actions/auth";

const Private = ({children}) => {
  useEffect(() => {
    // if they don't have access redirect to signin
    if(!isAuth()) {
      Router.push(`/signin`)
    }
  }, []);
  // otherwise, render children props
  return <React.Fragment>{children}</React.Fragment>;
};

export default Private;
