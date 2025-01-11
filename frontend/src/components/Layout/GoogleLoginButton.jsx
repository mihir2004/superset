import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const GoogleLoginButton = () => {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const userInfo = await axios.get(
          "https://www.googleapis.com/oauth2/v1/userinfo",
          {
            headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
          }
        );
        console.log(userInfo.data); // Handle success
      } catch (error) {
        console.error("Google login failed:", error);
      }
    },
    onError: () => {
      console.error("Login failed");
    },
  });

  return (
    <button
      onClick={login}
      className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
    >
      Login with Google
    </button>
  );
};

export default GoogleLoginButton;
