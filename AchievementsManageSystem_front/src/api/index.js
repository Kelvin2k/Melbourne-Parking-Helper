import axios from "axios";
import router from "../router/index.js"; // Directly use the router instance in JS files
import { ElMessage } from "element-plus";
// Why can't we use const router = useRouter()? Because useRouter can only be used inside Vue components
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000, // 5 seconds
});
// Add request interceptor
// Do some processing before sending the request, such as adding request headers
api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("saToken");
  config.headers.set(
    sessionStorage.getItem("tokenName"),
    sessionStorage.getItem("saToken")
  );
  return config;
});
// Set up response interceptor
api.interceptors.response.use(
  (response) => {
    // console.log("Frontend response interceptor, intercepted backend data: ", response.data);
    if (response.data.message === "Login has expired, please log in again") {
      // Remove saToken. Why? Because there are restrictions in route navigation
      sessionStorage.removeItem("saToken"); // Remove from session storage
      sessionStorage.removeItem("tokenName");
      sessionStorage.removeItem("role");
      ElMessage("Login has expired, please log in again");
      router.push("/loginandregister"); // Redirect to login page
      return response;
    } else {
      // If already logged in, allow and pass backend data to frontend. Must return response.
      return response;
    }
  },
  (error) => {
    console.log("error", response.data.code);
  }
);
export default api;
