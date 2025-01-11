import React from "react";
import LoginForm from "../components/LoginForm";
import GoogleLoginButton from "../components/GoogleLoginButton";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-700">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800">Login</h1>
        <LoginForm />
        <div className="text-center my-4 text-gray-600">OR</div>
        <GoogleLoginButton />
      </div>
    </div>
  );
};

export default LoginPage;
