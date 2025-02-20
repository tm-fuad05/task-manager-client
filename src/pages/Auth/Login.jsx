import React from "react";
// In your actual project, you would import the Google icon like this:
import { FcGoogle } from "react-icons/fc";
import GoogleButton from "../../components/Shared/GoogleButton";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6">
        <div className="bg-white rounded-lg shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {" "}
              Welcome to
              <a href="/" className="text-2xl md:text-3xl font-bold">
                <span className="text-main"> Task</span>Nest
              </a>
            </h2>
            <p className="text-gray-600">
              Enter your credentials to access your account
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main  focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main  focus:outline-none"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-main text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-main focus:ring-offset-2 transform transition-all duration-200"
            >
              Sign in
            </button>

            {/* Divider */}
            <div className="relative mt-3">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Google Button */}
            <GoogleButton />

            {/* Sign Up Link */}
            <p className="text-center text-sm text-gray-600 mt-4">
              Don't have an account?{" "}
              <Link to={"/register"} className="text-main hover:text-main">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
