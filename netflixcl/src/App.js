import React from "react";
import HomeScreen from "./screens/HomeScreen";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loginscreen from "./screens/Loginscreen";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Profilescreen from "./screens/Profilescreen";
import Profiles from "./screens/Profiles";
import Footer from "./Footer";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in

        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //logged out
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Loginscreen />
        ) : (
          <Switch>
            <Route path="/profile">
              <Profilescreen />
            </Route>
            <Route path="/profiles">
              <Profiles />
            </Route>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
      <Footer />
    </div>
  );
}

export default App;
