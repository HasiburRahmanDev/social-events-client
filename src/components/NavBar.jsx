import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const NavBar = () => {
  const { user, signOutFunc, setUser, loading } = use(AuthContext);
  console.log(user);

  const links = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink to="/upcoming-events">Upcoming Events</NavLink>
      </li>
    </>
  );

  const handleSignOut = () => {
    signOutFunc()
      .then(() => {
        toast.success("signOut successfully");
        setUser(null);
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="navbar bg-base-100 shadow-sm bg-green-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">KeepClean</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {loading ? (
          <p>loading...</p>
        ) : user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full relative">
                <img
                  src={user.photoURL || "https://via.placeholder.com/88"}
                  alt=""
                />
                <span
                  className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 
                   bg-gray-800 text-white text-sm px-2 py-1 rounded 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {user.displayName}
                </span>
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/create-event" className="justify-between">
                  Create Events
                </NavLink>
              </li>
              <li>
                <a>Manage Events</a>
              </li>
              <li>
                <a>Joined Events</a>
              </li>
              <li>
                <NavLink to="/">
                  <button onClick={handleSignOut} className="btn btn-primary">
                    SignOut
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        ) : (
          <div className="dropdown dropdown-start">
            <div tabIndex={0} role="button" className="btn m-1">
              Profile
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <NavLink to={"/login"}>LogIn</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
