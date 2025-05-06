import React, { useState } from "react";

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    setEmail('')
    setPassword('')
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            type="email"
            className="outline-none bg-transparent border-2 border-emerald-600 py-2 px-6 text-lg rounded-full placeholder:text-gray-400"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            type="password"
            className="mt-3 outline-none bg-transparent border-2 border-emerald-600 py-2 px-6 text-lg rounded-full placeholder:text-gray-400"
            placeholder="Enter your password"
          />
          <button className="mt-5 outline-none border-none bg-emerald-600 py-2 px-8 text-lg w-full rounded-full placeholder:text-black">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
