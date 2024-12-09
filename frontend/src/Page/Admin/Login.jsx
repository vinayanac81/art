import axios from "axios";
import { useState } from "react";
import React from "react";
import toast from "react-hot-toast";

const Login = () => {
  const [mail, setmail] = useState("");
  const [password, setpassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      "http://localhost:1000/admin/login",
      {},
      { params: { mail, password } }
    );
    console.log(data);
    if (data?.success) {
        toast.success("Login Successfully!")
    } else {
      toast.error("Email or Password error");
    }
  };
  return (
    <div>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">
            Admin Login
          </h2>
          <form className="space-y-4">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => setmail(e.target.value)}
                value={mail}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your password"
                required
              />
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Login
              </button>
            </div>
          </form>
          {/* Footer */}
          <p className="text-sm text-center text-gray-500 mt-4">
            Forgot your password?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Reset it here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
