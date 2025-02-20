import React from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const GoogleButton = () => {
  const { googleSignIn, setUser } = useAuth();
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    try {
      const result = await googleSignIn();

      if (!result.user) alert("Google sign in failed");

      const userInfo = {
        name: result.user?.displayName,
        email: result.user?.email,
        uid: result.user?.uid,
      };

      setUser(result.user);
      Swal.fire({
        title: "Successfully signed in",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
      navigate("/");
    } catch (error) {
      alert("Google sign in failed");
    }
  };

  return (
    <div>
      {/* Google Button */}
      <button
        onClick={handleGoogleSignIn}
        type="button"
        className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
      >
        <FcGoogle className="" />
        <span>Continue with Google</span>
      </button>
    </div>
  );
};

export default GoogleButton;
