import axios from "axios";

const apiClient = axios.create();

apiClient.defaults.baseURL = process.env.REACT_APP_API_URL;

export default apiClient;
