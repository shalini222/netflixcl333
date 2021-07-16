import React, { useState } from "react";
import "./Loginscreen.css";
import SignUpscreen from "./SignUpscreen";
function Loginscreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginscreen">
      <div className="loginscreen__background">
        <img
          className="loginscreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="loginscreen__button">
          Sign In
        </button>
        <div className="logincreen__gradient" />
        <div className="loginscreen__body">
          {signIn ? (
            <SignUpscreen />
          ) : (
            <>
              <h1>Unlimited films, TV programmes and more.</h1>
              <h2>Wactch anywhere. Cancel at any time.</h2>
              <h3>
                Ready to watch ? Enter your email to create or restart your
                membership.
              </h3>
              <div className="loginscreen__input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    onClick={() => setSignIn(true)}
                    className="loginscreen__getstarted"
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Loginscreen;
