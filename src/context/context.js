import { createContext } from "react";

const UserContext = createContext({
  userEmail: '',
  id: '',
  loggedIn: false
})

export default UserContext;