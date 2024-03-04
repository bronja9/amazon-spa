import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://api-aklybflp3a-uc.a.run.app",

  // "http://127.0.0.1:5001/spa-4b7bb/us-central1/api",
});

export default instance;
