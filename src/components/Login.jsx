import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res?.data));
      return navigate("/");
    } catch (err) {
      console.log();

      setErrorMsg(
        "Error : " + err?.response?.data?.error || "Something went wrong."
      );
    }
  };

  const handleSignup = async ()=>{
    try{
      const res = await axios.post(BASE_URL+"/signup",{firstName,lastName,emailId,password},{withCredentials:true});
      dispatch(addUser(res?.data?.data));
      return navigate("/profile");

    }catch(err){
       setErrorMsg(
        "Error : " + err?.response?.data?.error || "Something went wrong."
      );
      
    }
  }

  return (
    <div className="flex justify-center my-10 pb-20">
      <div className="card bg-base-300 w-96 shadow-sm ">
        <div className="card-body">
          <h2 className="card-title flex justify-center">
            {isLoginForm ? "Login" : "Sign Up"}
          </h2>
          <div className="self-center w-full ml-4">
            {!isLoginForm && (
              <>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">First Name </legend>
                  <input
                    type="text"
                    className="input"
                    value={firstName}
                    placeholder="Eg : Bhavik"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </fieldset>{" "}
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Last Name</legend>
                  <input
                    type="text"
                    className="input"
                    value={lastName}
                    placeholder="Eg: Patel"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </fieldset>
              </>
            )}

            {/* email */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">What is your email?</legend>
              <input
                type="text"
                className="input"
                value={emailId}
                placeholder="Eg: Bhavikpatel@gmail.com"
                onChange={(e) => setEmailId(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">password</legend>
              <input
                type="password"
                className="input"
                value={password}
                placeholder="************"
                onChange={(e) => setPassword(e.target.value)}
              />
              {!isLoginForm && (
                <p className="text-xs text-green-300">
                  Enter a strong password: a combination of uppercase,
                  lowercase, number and symbol.
                </p>
              )}
            </fieldset>
          </div>
          <p className="text-red-500">{errorMsg}</p>
        
            <button
              className="btn relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-red-500 to-orange-500 rounded-full shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-purple-600 transition-all duration-300 overflow-hidden"
              onClick={isLoginForm? handleLogin:handleSignup}
            >
              <span className="relative z-10">
                {isLoginForm ? "Login" : "Sign Up"}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 hover:opacity-30 transition-opacity duration-300"></span>
            </button>
          </div>
     
          
          <div className="space-y-4">

  
  <p 
    className="text-center text-sm text-gray-600 hover:text-white cursor-pointer transition-colors duration-300"
    onClick={() => setIsLoginForm(!isLoginForm)}
  >
    {isLoginForm ? "New user? Sign up here." : "Already have an account? Login here"}
  </p>
</div>
  
      </div>
    </div>
  );
};

export default Login;
