import React, { useContext, useState } from "react";
import {} from "../firebase.init";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../context/AuthContext";
import { NavLink, useNavigate } from "react-router";

const Register = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const {
    createUserWithEmailAndPasswordFunc,
    updateProfileFunc,
    signOutFunc,
    setUser,
  } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();

    const displayName = e.target.displayName.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!regex.test(password)) {
      toast.error(
        "Password must be at least 6 characters and include both uppercase and lowercase letters."
      );
      return;
    }
    createUserWithEmailAndPasswordFunc(email, password)
      .then((result) => {
        console.log(result);
        updateProfileFunc(displayName, photoURL).then((result) => {
          console.log(result);
        });
        signOutFunc()
          .then(() => {
            toast.success("Register successfully");
            setUser(null);
            navigate("/login");
          })
          .catch((e) => {
            toast.error(e.message);
          });
      })
      .catch((e) => {
        console.log(e.code);
        if (e.code == "auth/email-already-in-use") {
          toast.error("user allready in database");
        } else {
          toast.error(e.message);
        }
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Create your account</h1>
          <p className="py-6">
            Welcome to Social Events, your go-to platform for discovering,
            organizing, and connecting through meaningful events. Whether you’re
            planning a community gathering, a corporate meetup, or a cultural
            celebration, our platform helps you bring people together
            effortlessly. Explore upcoming events, connect with organizers, and
            share unforgettable experiences with others who share your passions.
            With easy event management tools and a vibrant community, Social
            Events makes it simple to stay engaged, inspired, and connected —
            all in one place.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset relative">
                <label className="label">name</label>
                <input
                  name="displayName"
                  type="text"
                  className="input"
                  placeholder="name"
                />
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">PhotoURL</label>
                <input
                  name="photoURL"
                  type="url"
                  className="input"
                  placeholder="PhotoURL"
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
                  className="absolute right-[24px] top-[250px] cursor-pointer z-10"
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </span>
                <div>
                  <NavLink to="/login">
                    <a className="link link-hover text-blue-700">
                      Have an account?
                    </a>
                  </NavLink>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
