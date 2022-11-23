import React from "react";

const LoginContext = React.createContext({
  isLogged: false,
  updateLoginStatus: (item) => {},
});


export default LoginContext;