import React from 'react';
import { useState, useEffect } from 'react';
import base64 from 'base-64';
import superagent from "superagent";
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';

export const LoginContext = React.createContext();
const API = 'https://todo-backend-5.herokuapp.com';

export default function LoginProvider(props) {

    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const [isUpdated, setIsUpdated] = useState(false);
    const [token, setToken] = useState(null);

    useEffect(() => {
      const cookieToken = cookie.load('token');
      JWToken(cookieToken);
      setToken(cookieToken)
  }, []);

    const login = async (username, password) => {

        try {
            const encodedUser = base64.encode(`${username}:${password}`);
           

            const response = await superagent.post(`${API}/signin`)
                .set('authorization', `Basic ${encodedUser}`);
    
            JWToken(response.body.token);
        } catch (error) {
            alert('Invalid username or password');
        }
    }

    const signup = async (userName, passWord, firstname , lastname , email, role) => {
        try {
          let obj = {
            username: userName,
            firstname: firstname,
            lastname: lastname,
            password: passWord,
            email: email,
            role: role
        }
        console.log(obj);
          const response = await superagent.post(`${API}/signup`, obj);
          JWToken(response.body.token);
        } catch (error) {
          alert(error.message)
        }
      };

    const JWToken = (token) => {
        if (token) {
            const user = jwt.decode(token);
            handleLogin(true, user);

            cookie.save('token', token)
        } else {
            handleLogin(false, {});
        }
    }

    const handleLogin = (loggedIn, user) => {
        setLoggedIn(loggedIn);
        setUser(user);
    }

    const logout = () => {
        handleLogin(false, {});
        cookie.remove('token');
    }

   

    const can = (capability) => {
    //   console.log(user);
        return user?.capabilities?.includes(capability);
    };

    const state = {
        loggedIn,
        signup,
        login,
        logout,
        user,
        can,
        token,
        setIsUpdated,
        isUpdated
    }

    return (
        <LoginContext.Provider value={state}>
            {props.children}
        </LoginContext.Provider>
    )

};