import React from "react";
import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";
import { useState } from "react";

const Register = () => {
  const { createAccount, updateNameAndPhoto, googleSignIn, gitHubSignIn } =
    useContext(AuthContext);
  const [error, setError] = useState("");

  // Register with email and password
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photoURL = form.photoURL.value;

    createAccount(email, password)
      .then((result) => {
        const user = result.user;
        updateNameAndPhoto(name, photoURL);
        toast.success("Successfully registered!");
        form.reset();
        setError("")
          .then(() => {})
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        setError(error.message);
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
    <section className="px-4 py-4 mx-auto max-w-7xl">
      <div className="w-full mx-auto space-y-5 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-1/2 shadow-xl p-4">
        <h1 className="text-4xl font-semibold text-center text-gray-900">
          Sign up
        </h1>
        <div className="pb-6 space-y-2 border-b border-gray-200">
          <Link
            onClick={handleGoogleSignIn}
            className="w-full py-3 btn btn-icon btn-google bg-blue-700 hover:bg-blue-600 border-0"
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
            Continue with Google
          </Link>
          <Link onClick={handleGitHubSignIn} className="w-full py-3 btn btn-icon btn-dark">
            <FaGithub className="mx-1 text-xl"></FaGithub>
            Continue with GitHub
          </Link>
        </div>
        <form onSubmit={handleRegister} className="space-y-4">
          <label className="block">
            <span className="block mb-1 text-xs font-medium text-gray-700">
              Name
            </span>
            <input
              className="form-input w-full border-2 rounded py-1 px-2"
              type="text"
              name="name"
              placeholder="Your full name"
              required
            />
          </label>
          <label className="block">
            <span className="block mb-1 text-xs font-medium text-gray-700">
              PhotoURL
            </span>
            <input
              className="form-input w-full border-2 rounded py-1 px-2"
              type="text"
              name="photoURL"
              placeholder="Drop your photoURL"
              required
            />
          </label>
          <label className="block">
            <span className="block mb-1 text-xs font-medium text-gray-700">
              Your Email
            </span>
            <input
              className="form-input w-full border-2 rounded py-1 px-2"
              type="email"
              name="email"
              placeholder="Ex. james@bond.com"
              required
            />
          </label>
          <label className="block">
            <span className="block mb-1 text-xs font-medium text-gray-700">
              Create a password
            </span>
            <input
              className="form-input w-full border-2 rounded py-1 px-2"
              type="password"
              name="password"
              placeholder="••••••••"
              required
            />
          </label>
          <button type="submit" className="w-full btn btn-primary">
            Sign up
          </button>
          <p className="text-red-600">{error}</p>
        </form>
        <p className="my-8 text-xs font-medium text-center text-gray-700">
          <span>
            Already have an account?{" "}
            <Link to="/login" className="text-blue-700 hover:underline">
              Login
            </Link>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Register;
