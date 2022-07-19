import React, { useState } from "react";
import UseAuth from "../../../Hooks/useAuth";
import "./SignUp.css";

const SignUp = () => {
  const [regData, setRegData] = useState({});

  const {user,error, registerUser,loading } = UseAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...regData };
    newLoginData[field] = value;
    setRegData(newLoginData);
    console.log(newLoginData)
  };

  // handle login
  // Submit form
  const handleLogSubmite = (e) => {
    if (regData.password !== regData.password2) {
      alert("pas not match");
      return;
    }

    registerUser(regData?.email, regData?.password);
    e.preventDefault();
  };

  return (
    <div>
      <h1>72-1</h1>

    
    
    
     { !loading &&<form onSubmit={handleLogSubmite}>
        <span className="name">Name</span> <br />
        <input
          autocomplete="off"
          required
          onBlur={handleOnBlur}
          type="name"
          name="name"
          id=""
        />{" "}
        <br />
        <span className="email">Email</span> <br />
        <input
          autocomplete="off"
          required
          onBlur={handleOnBlur}
          type="email"
          name="email"
          id=""
        />{" "}
        <br />
        <span className="password">Password</span> <br />
        <input
          autocomplete="off"
          required
          onBlur={handleOnBlur}
          type="password"
          name="password"
          id=""
        />{" "}
        <br />
        <span className="password2">Re-Password</span> <br />
        <input
          autocomplete="off"
          required
          onBlur={handleOnBlur}
          type="password"
          name="password2"
          id=""
        />{" "}
        <br />
        <button type="submit">Register</button> <br />
      </form>}
      {
        loading && <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      }
      {/* success alert */}
      {user?.email && <h1>Success</h1>}
{error && <h2>{error}</h2>}
    </div>
  );
};

export default SignUp;
