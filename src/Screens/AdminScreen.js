import { useState } from "react";
import LoginForm from "../components/LoginForm";
import OrdersTable from "../components/Orders";

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