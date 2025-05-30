import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [emailId, setEmailId] = useState("deepika@gmail.com");
  const [password, setPassword] = useState("Deepika@123");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3000/login", {
        emailId,
        password,
      }
      ,{
        withCredentials:true
      }
    );

      console.log(res);
      

    } catch (err) {
      console.log("error : "+err)
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-sm ">
        <div className="card-body">
          <h2 className="card-title flex justify-center">Login</h2>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">What is your email?</legend>
              <input
                type="text"
                className="input"
                value={emailId}
                placeholder="Enter email"
                onChange={(e) => setEmailId(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">password</legend>
              <input
                type="password"
                className="input"
                value={password}
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <div className="card-actions justify-center mt-5">
            <button className="btn btn-primary"
            onClick={handleLogin}
            >Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
