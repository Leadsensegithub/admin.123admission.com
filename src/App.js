import React, {
  Suspense,
  useEffect,
  useState,
} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "react-query";
import Cookies from "js-cookie";
import AppContext from "./Context/AppContext";
import AdminLayout from "./layout/AdminLayout";

const Login = React.lazy(() => import('./pages/Login/Login'));
const queryClient = new QueryClient();

const loading = (
  <div className="loading">
    <div className="spinner-grow text-success" role="status"></div>
  </div>
);

function App() {
  const [loginStatus, setLoginStatus] = useState(() => {
    // Initialize login status from cookies
    const savedStatus = Cookies.get('loginStatus');
    return savedStatus !== undefined ? JSON.parse(savedStatus) : true;
  });
  useEffect(() => {
    // Save login status to cookies whenever it changes
    Cookies.set('loginStatus', JSON.stringify(loginStatus));
  }, [loginStatus]);

  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await axios.get('https://api.ipify.org?format=json');
        console.log('ipadress', response?.data?.ip);
      } catch (error) {
        console.error('Error fetching the IP address:', error);
      }
    };

    fetchIpAddress();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={{ loginStatus, setLoginStatus }}>
        <Router>
          <Suspense fallback={loading}>
            <Routes>
              {loginStatus ? (
                <Route
                  path="/"
                  name="get"
                  element={<Login setLoginStatus={setLoginStatus} loginStatus={loginStatus} />}
                />
              ) : (
                <Route
                  path="/*"
                  name="get"
                  element={<AdminLayout />}
                />
              )}
            </Routes>
          </Suspense>
        </Router>
      </AppContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
