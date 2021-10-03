import axios from "axios";

const origin =
  process.env.NODE_ENV == "development"
    ? "http://localhost:7581"
    : window.location.origin;

export default axios.create({
  baseURL: origin
});
