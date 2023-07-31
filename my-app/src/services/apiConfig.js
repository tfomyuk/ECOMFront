import axios from "axios";

const authApi = axios.create({
  //baseURL: "http://localhost:3000/api",
  baseURL: "https://celtic-descent-390210.lm.r.appspot.com",
});

export default authApi;