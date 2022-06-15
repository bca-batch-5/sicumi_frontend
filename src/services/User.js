import fetchAPI from "../config/FetchAxios";

const ROOT_API_USER = process.env.REACT_APP_API_USER;

export const getUserAPI = async (data) => {
  const url = `${ROOT_API_USER}/signin`;

  const responseAxios = await fetchAPI({
    url,
    method: "post",
    data,
  });
  return responseAxios;
};

export const checkEmailAPI = async (data) => {
  const url = `${ROOT_API_USER}/check`;

  const responseAxios = await fetchAPI({
    url,
    method: "post",
    data,
  });
  return responseAxios;
};

export const addUserAPI = async (data) => {
  const url = `${ROOT_API_USER}/signup`;

  const responseAxios = await fetchAPI({
    url,
    method: "post",
    data,
  });
  return responseAxios;
};

export const findEmailAPI = async (data) => {
  const url = `${ROOT_API_USER}/find`;

  const responseAxios = await fetchAPI({
    url,
    method: "post",
    data,
  });
  return responseAxios;
};

export const newPasswordAPI = async (data) => {
  const url = `${ROOT_API_USER}/resetpassword`;

  const responseAxios = await fetchAPI({
    url,
    method: "put",
    data,
  });
  return responseAxios;
};
