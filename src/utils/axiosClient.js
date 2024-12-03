// src/utils/axiosConfig.js
import axios from "axios";
// import { getSession } from 'next-auth/react';
const token = localStorage.getItem("token");



const axiosInstance = axios.create({
  baseURL: `http://localhost:3000/api/v1`,
  timeout: 10000, // 10 seconds
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Token: token,
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      // Get session and add token to headers
      //   const session = await getSession();
      //   if (session?.user?.token) {
      //     config.headers.Authorization = `Bearer ${session.user.token}`;
      //   }
      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    if (response?.data) {
      return response?.data;
    }
  },
  async (error) => {
    const originalRequest = error.config;

    // Handle specific error scenarios
    if (error.response) {
      const { status, data } = error.response;

      switch (status) {
        case 401: // Unauthorized
          // Attempt to refresh token or redirect to login
          window.location.href = "/auth/login";
          break;

        case 403: // Forbidden
          // Handle permission denied
          break;

        case 404: // Not Found
          // Handle not found errors
          break;

        case 500: // Internal Server Error
          // Handle server errors
          break;
      }
    }

    // Fallback error handling
    const errorResponse = {
      message:
        error.response?.data?.message ||
        error.message ||
        "An unexpected error occurred",
      status: error.response?.status,
    };

    return Promise.reject(errorResponse);
  }
);

// Utility functions for different HTTP methods
export const apiService = {
  get: (url, params) =>
    axiosInstance.get(url, { params }).then((response) => response.data),

  post: (url, data) =>
    axiosInstance.post(url, data).then((response) => response.data),

  put: (url, data) =>
    axiosInstance.put(url, data).then((response) => response.data),

  patch: (url, data) =>
    axiosInstance.patch(url, data).then((response) => response.data),

  delete: (url) => axiosInstance.delete(url).then((response) => response.data),
};

// Export the configured axios instance
export default axiosInstance;
