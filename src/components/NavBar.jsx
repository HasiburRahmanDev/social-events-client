import React, { useContext } from "react";
import { NavLink } from "react-router"; // corrected import
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const NavBar = () => {
  const { user, signOutFunc, setUser, loading } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/" className="hover:text-secondary">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/upcoming-events" className="hover:text-secondary">
          Upcoming Events
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/create-event" className="hover:text-secondary">
              Create Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/joined-events" className="hover:text-secondary">
              Manage Events
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleTheme = (checked) => {
    console.log("Theme toggled:", checked);
  };

  const handleSignOut = () => {
    signOutFunc()
      .then(() => {
        toast.success("Signed out successfully");
        setUser(null);
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-primary text-white shadow-md">
      <div className="navbar container mx-auto flex justify-between items-center px-4">
        {/* Left side */}
        <div className="navbar-start flex items-center">
          {/* Mobile dropdown */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-secondary text-white rounded-box mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost text-xl font-bold">
            KeepClean
          </NavLink>
        </div>

        {/* Center links (desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Right side */}
        <div className="navbar-end flex items-center gap-4">
          {loading ? (
            <p>Loading...</p>
          ) : user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar group"
              >
                <div className="w-10 rounded-full relative">
                  <img
                    src={user.photoURL || "https://via.placeholder.com/88"}
                    alt="profile"
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
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-secondary text-white rounded-box mt-3 w-52 p-2 shadow"
              >
                <li>
                  <button
                    onClick={handleSignOut}
                    className="btn btn-error w-full"
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="dropdown dropdown-start">
              <div tabIndex={0} role="button" className="btn m-1">
                Profile
              </div>
              <ul
                tabIndex={-1}
                className="dropdown-content menu bg-secondary text-white rounded-box w-52 p-2 shadow-sm"
              >
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
              </ul>
            </div>
          )}

          {/* Theme toggle */}
          <label className="swap swap-rotate">
            <input
              onChange={(e) => handleTheme(e.target.checked)}
              type="checkbox"
              className="theme-controller"
            />
            {/* Sun icon */}
            <svg
              className="swap-off h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Zm7-7a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0V4a1 1 0 0 0 1 1Z" />
            </svg>
            {/* Moon icon */}
            <svg
              className="swap-on h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14..." />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
