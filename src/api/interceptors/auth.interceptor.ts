// src/api/interceptors/auth.interceptor.ts

import { AxiosError } from "axios";
import client from "../client";

// Attach auth interceptor
client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    const { status } = error.response || {};

    // Handle 401 Unauthorized (token expired or invalid)
    if (status === 401) {
      console.warn("🔐 [AUTH ERROR] Unauthorized - redirecting to login");

      // Clear auth state (we'll implement AuthContext later)
      // For now, just store intention to redirect
      localStorage.setItem("authError", "Session expired. Please login again.");

      // Redirect to login page
      window.location.href = "/";

      // Don't return error; let the redirect handle it
      return new Promise(() => {}); // Hang the promise
    }

    // Handle 403 Forbidden (user lacks permission)
    if (status === 403) {
      console.warn("🔐 [PERMISSION ERROR] Forbidden - user lacks permission");
      // You can dispatch event or update context here
      // For now, just log
    }

    return Promise.reject(error);
  },
);

export default client;
