import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Switch from "react-switch";
import { ThemeContext } from "../../context/ThemeProvider";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOutSystem } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleLogOut = () => {
    logOutSystem();
  };

  return (
    <div className="border-b-2">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center"
          >
            <svg
              className="w-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Learn With Mahin
            </span>
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/home"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                FAQ
              </Link>
            </li>
            <li>
              <div className=" flex items-center gap-1">
                <FaSun className="cursor-pointer text-xl" />
                <div>
                  <Switch
                    onChange={toggleTheme}
                    checked={!theme}
                    className="mt-1"
                  ></Switch>
                </div>
                <FaMoon className="cursor-pointer text-xl"></FaMoon>
              </div>
            </li>
          </ul>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li className="">
              {user?.uid ? (
                <>
                  <button
                    onClick={handleLogOut}
                    className="inline-flex bg-cyan-500 hover:bg-cyan-600 rounded-full items-center justify-center py-2 px-6 font-medium tracking-wide transition duration-200 shadow-md focus:shadow-outline focus:outline-none"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="inline-flex items-center justify-center py-2 px-6 font-medium tracking-wide transition duration-200 shadow-md bg-cyan-500 hover:bg-cyan-600 rounded-full focus:shadow-outline focus:outline-none mr-1"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="inline-flex items-center justify-center py-2 px-6 font-medium tracking-wide transition duration-200 rounded-full shadow-md  bg-cyan-500 hover:bg-cyan-600 focus:shadow-outline focus:outline-none ml-3"
                  >
                    Register
                  </Link>
                </>
              )}
            </li>

            <li>
              {user?.uid ? (
                <>
                  <Link>
                    <img
                      title={user?.displayName}
                      className="w-9 h-9 rounded-full"
                      src={user?.photoURL}
                      alt=""
                    />
                  </Link>
                </>
              ) : (
                <>
                  <Link>
                    <img
                      src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png"
                      className="w-10 h-10 rounded-full"
                      alt=""
                    />
                  </Link>
                </>
              )}
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-40">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        className="inline-flex items-center"
                      >
                        <svg
                          className="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Learn-With-Mahin
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/home"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/courses"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Courses
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/faq"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          FAQ
                        </Link>
                      </li>

                      <li>
                        <div className=" flex items-center gap-1">
                          <FaSun className="cursor-pointer text-xl" />
                          <div>
                            <Switch
                              onChange={toggleTheme}
                              checked={!theme}
                              className="mt-1"
                            ></Switch>
                          </div>
                          <FaMoon className="cursor-pointer text-xl"></FaMoon>
                        </div>
                      </li>

                      <div className="flex justify-between items-center">
                        <li className="w-1/2">
                          {user?.uid ? (
                            <>
                              <button
                                onClick={handleLogOut}
                                className="inline-flex bg-teal-500 hover:bg-teal-700 w-full rounded-full items-center justify-center py-2 px-6 font-medium tracking-wide transition duration-200 shadow-md focus:shadow-outline focus:outline-none "
                              >
                                Log Out
                              </button>
                            </>
                          ) : (
                            <>
                              <Link
                                to="/login"
                                className="inline-flex items-center justify-center py-2 px-6 font-medium tracking-wide bg-teal-500 hover:bg-teal-700 rounded-full transition duration-200 shadow-md focus:shadow-outline focus:outline-none"
                              >
                                Login
                              </Link>
                              <Link
                                to="/register"
                                className="inline-flex items-center justify-center py-2 bg-teal-500 hover:bg-teal-700 mt-2 px-6 font-medium tracking-wide transition duration-200 rounded-full shadow-md focus:shadow-outline focus:outline-none"
                              >
                                Register
                              </Link>
                            </>
                          )}
                        </li>
                        <li>
                          {user?.uid ? (
                            <>
                              <img
                                className="w-9 h-9 rounded-full"
                                title={user.displayName}
                                src={user?.photoURL}
                                alt=""
                              />
                            </>
                          ) : (
                            <>
                              <Link>
                                <img
                                  src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png"
                                  className="w-10 h-10 rounded-full"
                                  alt=""
                                />
                              </Link>
                            </>
                          )}
                        </li>
                      </div>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
