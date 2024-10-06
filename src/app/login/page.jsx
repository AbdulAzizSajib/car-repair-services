"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log("Form data: ", data);
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      console.log("currentUser-> ", res);
      if (res.status === 200) {
        // Redirect to dashboard
        // Navigate to /dashboard
        router.push("/");
      }
    } catch (error) {
      console.error("Error during submission: ", error);
    }
  };

  return (
    <div>
      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8">
            <div className="absolute inset-0">
              <Image
                src="/assets/images/login/car.jpg"
                layout="fill"
                objectFit="cover"
                alt="image"
                className=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

            <div className="relative">
              <div className="w-full xl:w-full xl:mx-auto xl:pr-24 ">
                <h3 className="text-4xl font-bold text-white">
                  Get Your Car Serviced by Experts &{" "}
                  <br className="hidden xl:block" />
                  Drive with Confidence
                </h3>
                <ul className="grid grid-cols-1 w-full mt-10 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {/* List Items */}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Sign in to Celebration
              </h2>
              <p className="mt-2 text-base text-gray-600">
                Don’t have an account?
                <Link
                  href="/registration"
                  className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
                >
                  Create a free account
                </Link>
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        {/* Email Icon */}
                      </div>
                      <input
                        {...register("email", {
                          required: "Email is required",
                        })}
                        type="email"
                        placeholder="Enter email to get started"
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                      {errors.email && (
                        <span className="text-red-500">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label className="text-base font-medium text-gray-900">
                        Password
                      </label>
                      <a
                        href="#"
                        className="text-sm font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        {/* Password Icon */}
                      </div>
                      <input
                        {...register("password", {
                          required: "Password is required",
                        })}
                        type="password"
                        placeholder="Enter your password"
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                      {errors.password && (
                        <span className="text-red-500">
                          {errors.password.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
                    >
                      Log in
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
