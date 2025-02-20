import React from "react";
import GoogleButton from "../../components/Shared/GoogleButton";
import { Link } from "react-router-dom";
// In your actual project, import the Google icon:
// import { FcGoogle } from 'react-icons/fc';

const Register = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-xl p-6">
        <div className="bg-white rounded-lg shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Create an account
            </h2>
            <p className="text-gray-600">
              Sign up to get started with our platform
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Full Name */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main focus:outline-none"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main focus:outline-none"
                  placeholder="Doe"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main focus:outline-none"
                placeholder="your@email.com"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-main focus:outline-none"
                placeholder="••••••••"
              />
              <p className="text-xs text-gray-500">
                Must be at least 8 characters long
              </p>
            </div>

            {/* Terms and Conditions */}
            {/* <div className="flex items-start">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-gray-300 text-main focus:ring-main"
              />
              <label className="ml-2 text-sm text-gray-600">
                I agree to the{" "}
                <a href="#" className="text-main hover:text-main">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-main hover:text-main">
                  Privacy Policy
                </a>
              </label>
            </div> */}

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-main text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-main focus:ring-offset-2 transform transition-all duration-200"
            >
              Create Account
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or sign up with
                </span>
              </div>
            </div>

            {/* Google Button */}
            <GoogleButton />

            {/* Sign In Link */}
            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{" "}
              <Link to={"/login"} className="text-main hover:text-main">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
