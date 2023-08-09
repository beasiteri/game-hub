import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5c7b7af062314734b31a22dcdfa64c05"
  }
})