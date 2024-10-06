"use client";
import Link from "next/link";
import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const session = useSession();
  console.log(session);
  return (
    <div>
      <div className="navbar bg-base-100">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navlinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Car Services</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end  ">
          <div>
            <CiSearch className="text-2xl mr-3" />
          </div>
          <div>
            <div className="dropdown mr-5 dropdown-end">
              <div tabIndex={0} role="button" className="">
                <div className="indicator">
                  <HiOutlineShoppingBag className="text-2xl font-bold" />
                  <span className="badge  badge-sm    indicator-item p-1  ">
                    8
                  </span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link
            href="/"
            className="btn text-primary  hover:bg-primary hover:text-white hover:border-primary  btn-outline outline-primary "
          >
            Appointment
          </Link>
          {!session.data ? (
            <Link
              href="/login"
              className="btn text-white bg-primary  ml-3 hover:bg-primary hover:text-white   border-none "
            >
              Login
            </Link>
          ) : (
            <button
              className="btn text-white bg-primary  ml-3 hover:bg-primary hover:text-white   border-none "
              onClick={() => signOut()}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const navlinks = (
  <>
    <li>
      <Link href="/"> Home </Link>
    </li>
    <li>
      <Link href="/"> About </Link>
    </li>
    <li>
      <Link href="/"> Services </Link>
    </li>
    <li>
      <Link href="/"> Blog </Link>
    </li>
    <li>
      <Link href="/"> Contact </Link>
    </li>
  </>
);
export default Navbar;
