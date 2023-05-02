import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (req) => {
    // Add authorization header
    const token = localStorage.getItem("token");
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Error handler
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      // Redirect to login page
      return Promise.reject({
        message: "Unauthorized. Please log in again.",
        originalError: error,
      });
    } else if (error.response.status === 404) {
      return Promise.reject({
        message: `${error.config.url} not found`,
        originalError: error,
      });
    } else {
      return Promise.reject({
        message: "An error occurred. Please try again later.",
        originalError: error,
      });
    }
  }
);

export default api;
