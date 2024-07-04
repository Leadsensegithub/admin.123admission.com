import { createContext } from "react";

const AppContext = createContext({
  loggedIn: false,
  logginInfo: {},
  menuName: "",
  success: true,
  msg: "",
  commonfilter: {},
});

export default AppContext;
