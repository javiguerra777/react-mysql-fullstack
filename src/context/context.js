import { createContext, useContext } from "react";

const UserContext = createContext({
  userEmail: '',
  id: '',
  loggedIn: false
})

export default UserContext;