import { useState } from "react";
import LoginForm from "../components/LoginForm";
import OrdersTable from "../components/Orders";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function AdminScreen() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('token'); // remove the token from local storage
  };

  const isAuthenticated = () => {
    return token !== '';
  };

  return (
    
    <div>
      {isAuthenticated() ? (
        <>
          <button onClick={handleLogout}>Log out</button>
          
          <OrdersTable />
          
        </>
      ) : (
        <LoginForm setToken={setToken} />
      )}
    </div>
  );
}
export default AdminScreen;