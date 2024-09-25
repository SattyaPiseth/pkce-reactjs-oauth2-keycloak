import axios from 'axios';
import userManager from '../config/OidcConfig'; // Ensure this is the correct path to your OIDC config

// Base URL for your resource server
const BASE_URL = 'http://localhost:8080/api'; // Change this to your resource server URL

// Create an axios instance
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to attach the access token
apiClient.interceptors.request.use(
  async (config) => {
    const user = await userManager.getUser();
    if (user && user.access_token) {
      config.headers.Authorization = `Bearer ${user.access_token}`;
    }
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Function to handle errors
const handleError = (error) => {
  console.error('API call error:', error);
  // Optional: Implement additional error handling logic here (e.g., logging, user notifications)
  throw error; // Rethrow the error for further handling
};

// Function to get data from the home endpoint
export const getHomeData = async () => {
  try {
    const response = await apiClient.get('/home'); // Adjust endpoint as necessary
    return response.data; // Return the data
  } catch (error) {
    handleError(error); // Handle error appropriately
  }
};

// Optional: You can also export other API functions in this file
export default {
  getHomeData,
};
