import axios from "axios";
const Axios = axios.create({
//   baseURL: "https://ikonikbez.onrender.com/api/v1",
  baseURL:"http://localhost:4000/api/v1"
});
export default Axios;