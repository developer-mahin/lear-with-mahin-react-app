import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";
import { useState } from "react";

const Login = () => {
  const { loginSystem, googleSignIn, gitHubSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginSystem(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Successfully login!");
        form.reset();
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        console.error(error);
      });
  };

  // login with google
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.currentUser;
        setError("")
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // login with github
  const handleGitHubSignIn = () => {
    gitHubSignIn()
      .then((result) => {
        const user = result.currentUser;
        setError("")
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <section className="">
      <div className="px-0 mx-auto max-w-7xl sm:px-4">
        <div className="w-full px-4 pt-5 pb-6 mx-auto mt-8 mb-6 bg-white rounded-none shadow-xl sm:rounded-lg sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 sm:px-6">
          <h1 className="mb-4 text-lg font-semibold text-left text-gray-900">
            Log in to your account
          </h1>
          <form onSubmit={handleLogin} className="mb-8 space-y-4">
            <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">
                Your Email
              </span>
              <input
                className="form-input w-full border-2 rounded py-1 px-2"
                type="email"
                placeholder="Please enter email"
                name="email"
                required
              />
            </label>
            <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">
                Your Password
              </span>
              <input
                className="form-input w-full border-2 rounded py-1 px-2"
                type="password"
                name="password"
                placeholder="••••••••"
                required
              />
            </label>
            <input
              type="submit"
              className="w-full py-3 mt-1 btn btn-primary"
              value="Login"
            />
            <p className="text-red-600">{error}</p>
          </form>
          <div className="space-y-8">
            <div
              className="text-center border-b border-gray-200"
              style={{ lineHeight: "0px" }}
            >
              <span
                className="p-2 text-xs font-semibold tracking-wide text-gray-600 uppercase bg-white"
                style={{ lineHeight: "0px" }}
              >
                Or
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Link
                onClick={handleGoogleSignIn}
                className="py-3 btn btn-icon btn-google"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-1"
                >
                  <path d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28	c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233	c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934	C20.485,11.453,20.404,10.884,20.283,10.356z" />
                </svg>
                <span className="sr-only">Continue with</span> Google
              </Link>
              <Link
                onClick={handleGitHubSignIn}
                className="py-3 btn btn-icon btn-dark"
              >
                <span className="sr-only">Continue with</span>
                <FaGithub className="mx-1 text-xl"></FaGithub> GitHub
              </Link>
            </div>
          </div>
        </div>
        <p className="mb-4 text-xs text-center text-gray-400">
          <Link to="/register" className="text-blue-700 mx-2 hover:underline">
            Create an account
          </Link>
          ·
          <Link className="text-blue-700 mx-2 hover:underline">
            Forgot password
          </Link>
          ·
          <Link className="text-blue-700 mx-2 hover:underline">
            Privacy & Terms
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
