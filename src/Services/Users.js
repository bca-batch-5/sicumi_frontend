//service for users end point
import fetchAPI from "../Config/Api/index";

const ROOT_API_SICUMI = process.env.REACT_APP_API_SICUMI_DEV;

export const updateInfoAPI = async (data) => {
  const url = `${ROOT_API_SICUMI}/1/info`;

  const responseAxios = await fetchAPI({
    url,
    method: "put",
    data,
  });

  return responseAxios;
};

export const updatePasswordAPI = async (data) => {
  const url = `${ROOT_API_SICUMI}/1/pass`;

  const responseAxios = await fetchAPI({
    url,
    method: "put",
    data,
  });

  return responseAxios;
};
export const updatePhoneAPI = async (data) => {
  const url = `${ROOT_API_SICUMI}/1/phone`;

  const responseAxios = await fetchAPI({
    url,
    method: "put",
    data,
  });

  return responseAxios;
};
export const updatePinAPI = async (data) => {
  const url = `${ROOT_API_SICUMI}/1/pin`;

  const responseAxios = await fetchAPI({
    url,
    method: "put",
    data,
  });

  return responseAxios;
};

export const getUserByIdAPI = async () => {
  const url = `${ROOT_API_SICUMI}/1`;

  const responseAxios = await fetchAPI({
    url,
    method: "get",
  });

  console.log("responseAxios: ", responseAxios);
  return responseAxios.data;
};
export const uploadFileAPI = async (file) => {
  const url = `${ROOT_API_SICUMI}/1/img`;
  let data = new FormData();
  data.append("file", file);
  const response = await fetchAPI({ url, method: "put", data });
  console.log(response);
  return response.data;
};

export const loadFileAPI = async (filename) => {
  const url = `${ROOT_API_SICUMI}/1/${filename}`;
  return url;
};
