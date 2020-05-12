import fetch from "isomorphic-fetch";
import cookie from "js-cookie";
import {API} from "../config";
import Router from "next/router";

// HANDLE RESPONSE
export const handleResponse = response => {
  if(response.status === 401) {
    signout(() => {
      Router.push({
        pathname: "/signin",
        query: {
          message: "Your session is expired - Please sign in"
        }
      });
    });
  } else {
    return;
  }
};

// PRE SIGN UP
export const preSignup = (user) => {
  return fetch(`${API}/pre-signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
  .then(response => {
    return response.json();
  })
  .catch(err => console.log(err));
};

// SIGN UP
export const signup = (user) => {
  return fetch(`${API}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
  .then(response => {
    return response.json();
  })
  .catch(err => console.log(err));
};

// SIGN IN
export const signin = (user) => {
  return fetch(`${API}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
  .then(response => {
    return response.json();
  })
  .catch(err => console.log(err));
};

// SIGN OUT
export const signout = (next) => {
  // remove all data from storage
  removeCookie("token");
  removeLocalStorage("user");
  next();
  // make request to backend
  return fetch(`${API}/signout`, {
    method: "GET"
  })
  .then(response => {
    console.log("Signout success");
  })
  .catch(err => console.log(err));
};

// SET COOKIE
export const setCookie = (key, value) => {
  if(process.browser) {
    cookie.set(key, value, {
      expires: 1
    });
  }
};

// REMOVE COOKIE
export const removeCookie = (key) => {
  if(process.browser) {
    cookie.remove(key, {
      expires: 1
    });
  }
};

// GET COOKIE
export const getCookie = (key) => {
  if(process.browser) {
    return cookie.get(key);
  }
};

// SET LOCAL STORAGE
export const setLocalStorage = (key, value) => {
  if(process.browser) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

// REMOVE LOCAL STORAGE
export const removeLocalStorage = (key) => {
  if(process.browser) {
    localStorage.removeItem(key);
  }
};

// AUTHENTICATE
// authenticate user by pass data to cookie and localstorage
export const authenticate = (data, next) => {
  setCookie("token", data.token);
  setLocalStorage("user", data.user);
  next();
};

// IS AUTH
export const isAuth = () => {
  if(process.browser) {
    const cookieChecked = getCookie("token");
    if(cookieChecked) {
      if(localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
      } else {
        return false;
      }
    }
  }
};

// UPDATE USER
export const updateUser = (user, next) => {
  if(process.browser) {
    if(localStorage.getItem("user")) {
      let auth = JSON.parse(localStorage.getItem("user"));
      auth = user;
      localStorage.setItem("user", JSON.stringify(auth));
      next();
    }
  }
};


// FORGOT PASSWORD
export const forgotPassword = email => {
  return fetch(`${API}/forgot-password`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(email)
  })
  .then(response => {
    return response.json();
  })
  .catch(err => console.log(err));
};

// RESET PASSWORD
export const resetPassword = resetInfo => {
  return fetch(`${API}/reset-password`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    // newPassword and resetPasswordLink from /pages/auth/password/reset/[id].js
    body: JSON.stringify(resetInfo)
  })
  .then(response => {
    return response.json();
  })
  .catch(err => console.log(err));
};

// GOOGLE OAUTH2 LOGIN
export const loginWithGoogle = user => {
  return fetch(`${API}/google-login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
  .then(response => {
    return response.json();
  })
  .catch(err => console.log(err));
};
