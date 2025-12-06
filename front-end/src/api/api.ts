import axios from "axios";

const $api = axios.create({
  baseURL: "https://fcore.tech/api",
  timeout: 10000,
});

export const sendForm = async (form: FormData) => {
  return $api.post("/postForm", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const sendUtm = async () => {
  return $api.get("/utm/stats").catch((err) => {
    throw err;
  });
};
