import React from "react";
import GoogleLogin from "react-google-login";
import "./Login.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "570463222219-lgt7qokso77i4ld5qsjq6ijfvfgapg3p.apps.googleusercontent.com";

const Login = ({ handleLogin }) => {
  return (
    <div className="Login-body">
      <div className="Login-centerBox">
        <div className="Login-title">Play Guitar</div>
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={handleLogin}
          onFailure={(err) => console.log(err)}
          theme="light"
        />
      </div>
    </div>
  );
};

export default Login;
