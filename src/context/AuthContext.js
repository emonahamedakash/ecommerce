import { createContext, useContext, useMemo, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../baseUrl";
import { useLocalStorage } from "../hook/useLocalStorage";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthContext = createContext({});
export const useAuth = () => {
  return useContext(AuthContext);
};

const setSession = (accessToken) => {
  localStorage.setItem("accessToken", accessToken);
};

const setUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useLocalStorage("user", null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signIn = (email, password) => {
    let data = {
      username: email,
      password: password,
      client_id: "halal-food-client-id",
      client_secret: "halal-food-client-secret",
      grant_type: "password",
    };
    return new Promise(function (resolve, reject) {
      axios
        .post(`${BASE_URL}/oauth/token`, null, {
          params: data,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((response) => {
          setUser(response.data.user);
          setCurrentUser(response.data.user);
          setSession(response.data.access_token);
          resolve(response);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };
  const signUp = (username, email, password) => {
    let data = {
      username: username,
      email: email,
      password: password,
      client_id: "halal-food-client-id",
      client_secret: "halal-food-client-secret",
      grant_type: "password",
    };
    return new Promise(function (resolve, reject) {
      axios
        .post(`${BASE_URL}/oauth/token`, null, {
          params: data,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((response) => {
          setUser(response.data.user);
          setCurrentUser(response.data.user);
          setSession(response.data.access_token);
          resolve(response);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };

  const signOut = () => {
    setCurrentUser(null);
    setUser(null);
    navigate("/", { replace: true });
    toast.success("Logged out successfully!", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const value = useMemo(
    () => ({
      currentUser,
      signIn,
      signUp,
      signOut,
    }),
    [currentUser]
  );

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
      {loading && BasicExample}
    </AuthContext.Provider>
  );
};

function BasicExample() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default BasicExample;
