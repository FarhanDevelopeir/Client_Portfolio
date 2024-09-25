import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin_Authentication = () => {
  const [authForm, setAuthForm] = useState({ name: "", password: "" });
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const name = "saleem shahzad";
  const password = "saleem@500";

  const Authentication = (e) => {
    e.preventDefault();

    console.log(authForm);
    if (authForm.name === name && authForm.password === password) {
      localStorage.setItem("admin", true);
      navigate("/adminpanel");
    } else {
      setError(true);
      setTimeout(()=>{
            setError(false)
      },4000)
    }
  };
  return (
    <div className=" ">
      <section class="  bg-gray-900 h-screen pt-20 md:pt-0">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <h1 class="text-lg text-center font-semibold leading-tight pb-10 tracking-tight  md:text-4xl text-white">
            Admin Panel Authentication
          </h1>
          <div class="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
            <div class=" px-3 py-6 md:p-6 space-y-4 md:space-y-6 sm:p-8">
              <form
                class="space-y-4 md:space-y-6"
                action="#"
                onSubmit={Authentication}
              >
                <div>
                  <label
                    for="name"
                    class="block mb-2 text-sm md:font-medium  text-white"
                  >
                    Admin Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    value={authForm.name}
                    onChange={(e) => {
                      setAuthForm({ ...authForm, name: e.target.value });
                    }}
                    class=" border   rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 md:p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="enter name"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm md:font-medium  text-white"
                  >
                    Admin Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    value={authForm.password}
                    onChange={(e) => {
                      setAuthForm({ ...authForm, password: e.target.value });
                    }}
                    class=" border   rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 md:p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required=""
                  />
                </div>

                <button
                  type="submit"
                  class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-primary-700 focus:ring-primary-800"
                >
                  Sign in
                </button>
              </form>
              {error && <div className=" text-red-700 font-semibold text-md">Please Enter correct name and password </div>}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admin_Authentication;
