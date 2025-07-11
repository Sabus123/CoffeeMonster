import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";

const SignUp = () => {

    const {createUser} = use(AuthContext);
    console.log(createUser);

    const handleSignUp = e =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const email = formData.get('email');
        const password = formData.get('password');
        console.log(email, password);




        // create user in the firebase

    createUser(email, password)
    .then(result =>{
        console.log(result.user);
    })
    .catch(error =>{
        console.log(error);
    });
    
    }

  return (
    <div className="card bg-base-100 mx-auto max-w-sm shrink-0 shadow-2xl mt-14">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Sign Up now!</h1>
        <form onSubmit={handleSignUp} className="fieldset">
          <label className="label">Email</label>
          <input type="email"
           className="input" 
           name= "email"
           placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" 
          className="input" 
          name= "password"
          placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
