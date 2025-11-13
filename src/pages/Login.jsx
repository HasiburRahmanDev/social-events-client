import { GoogleAuthProvider } from "firebase/auth";
import React, { useState, useContext } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Navigate, NavLink } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [show, setShow] = useState(false);
  const { signInWithEmailAndPasswordFunc, signInWithPopupFunc, setUser } =
    useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPasswordFunc(email, password)
      .then((result) => {
        console.log(result);
        setUser(result.user);
        toast.success("Login Successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handleGoogleSignIn = () => {
    signInWithPopupFunc()
      .then((result) => {
        console.log(result);
        setUser(result.user);
        toast.success("sign In successfull");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="text-center lg:text-left">
                <h1 className="text-3xl font-bold">Login</h1>
              </div>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  name="password"
                  type={show ? "text" : "password"}
                  className="input"
                  placeholder="Password"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-[48px] top-[135px] cursor-pointer z-10"
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </span>
                <button className="btn btn-neutral mt-4">Login</button>
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  className="btn bg-white text-black border-[#e5e5e5]"
                >
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
                <div className="flex justify-between">
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <div>
                    Don't have an account?{" "}
                    <span className="text-blue-700 cursor-pointer">
                      <NavLink to="/register">Register</NavLink>
                    </span>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
