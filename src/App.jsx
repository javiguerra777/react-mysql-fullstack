import React, {useState} from 'react';
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Layout from "./pages/Layout";
import Addproducts from './pages/addproducts';
import EditProduct from './pages/EditProduct';
import UserContext from './context/context';

function App() {
  const [user, setUser] = useState({
    email: '',
    id: 0,
    loggedIn: false
  });
  console.log(user.loggedIn);
  console.log(user);
  return (
    <UserContext.Provider value={{user, setUser}}>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Login/>} />
        <Route path="signup" element={<Signup/>} />
        <Route path="home" element={<Home/>} />
        <Route path="addproducts" element={<Addproducts />} />
        <Route path="editproduct/:id" element={<EditProduct/> }/>
      </Route>
      </Routes>
       </UserContext.Provider>
  );
}

export default App;
