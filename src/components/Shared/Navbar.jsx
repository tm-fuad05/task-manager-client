import React, { useState } from "react";
import { FiLogOut, FiPlus } from "react-icons/fi";
import { HiDotsVertical } from "react-icons/hi";

import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const Navbar = () => {
  const { signOutUser, user } = useAuth();
  console.log(user);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          title: "Logged out",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      })
      .catch(() => {});
  };

  return (
    <div>
      <div className="px-6 md:px-8 lg:px-12 navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a href="/" className="text-2xl md:text-3xl font-bold">
            <span className="text-main">Task</span>Nest
          </a>
        </div>

        <div>
          {pathname === "/" ? (
            <div className="flex gap-2">
              <div className="flex-none">
                <button className="btn btn-ghost bg-main text-white">
                  <FiPlus /> Add Task
                </button>
              </div>
              <button
                className="btn"
                popoverTarget="popover-1"
                style={
                  { anchorName: "--anchor-1" } /* as React.CSSProperties */
                }
              >
                <HiDotsVertical />
              </button>

              <ul
                className="dropdown dropdown-end menu w-52 rounded-box bg-base-100 shadow-sm"
                popover="auto"
                id="popover-1"
                style={
                  {
                    positionAnchor: "--anchor-1",
                  } /* as React.CSSProperties */
                }
              >
                <li className="my-2 font-semibold pl-2 pb-1 border-b border-gray-200">
                  {user?.displayName}
                </li>
                <li>
                  <a className="text-red-500" onClick={handleSignOut}>
                    <FiLogOut /> Log Out
                  </a>
                </li>
              </ul>
            </div>
          ) : pathname === "/login" ? (
            <div className="flex-none">
              <button className="btn btn-ghost bg-main text-white">
                <Link to={"/register"}>Sign Up</Link>
              </button>
            </div>
          ) : (
            <div className="flex-none">
              <button className="btn btn-ghost bg-main text-white">
                <Link to={"/login"}>Sign in</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
