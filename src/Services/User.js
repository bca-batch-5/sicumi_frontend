import fetchAPI, { getHeaders, getUserId } from "../Config/FetchAxios";

const ROOT_API_USER = process.env.REACT_APP_API_USER;

export const getUserAPI = async (data) => {
  const url = `${ROOT_API_USER}/user/signin`;

  const responseAxios = await fetchAPI({
    url,
    method: "post",
    data,

  });
  return responseAxios;
};

export const checkEmailAPI = async (data) => {
  const url = `${ROOT_API_USER}/user/check`;

  const responseAxios = await fetchAPI({
    url,
    method: "post",
    data,
  });
  return responseAxios;
};

export const addUserAPI = async (data) => {
  const url = `${ROOT_API_USER}/user/signup`;

  const responseAxios = await fetchAPI({
    url,
    method: "post",
    data,
  });
  return responseAxios;
};

export const findEmailAPI = async (data) => {
  const url = `${ROOT_API_USER}/user/find`;

  const responseAxios = await fetchAPI({
    url,
    method: "post",
    data,
  });
  return responseAxios;
};

export const newPasswordAPI = async (data) => {
  const url = `${ROOT_API_USER}/user/resetpassword`;

  const responseAxios = await fetchAPI({
    url,
    method: "put",
    data,
  });
  return responseAxios;
};

export const getDetailAPI = async(data) => {
  const headers = getHeaders();
  const userId= getUserId();
  const url = `${ROOT_API_USER}/DetailUser/${userId}`

  const responseAxios = await fetchAPI({
      url,
      method : "get",
      data,
      headers
  });
  console.log("Response service : ",responseAxios);
  return responseAxios;
};

export const updateBalanceAPI = async(data)=>{
  const headers = getHeaders();
  const userId= getUserId();
  const url = `${ROOT_API_USER}/DetailUser/update/`

  const responseAxios =await fetchAPI({
      url,
      method : "put",
      data,
      headers,
  });
  return responseAxios;
};

export const getTransferBySenderAPI = async(data) => {
  const headers = getHeaders();
  const userId= getUserId();
  const url = `${ROOT_API_USER}/transaction`

  const responseAxios = await fetchAPI({
      url,
      method : "post",
      data,
      headers,
  });
  return responseAxios;
};

export const getAllTransactionAPI = async(data) => {
  const headers = getHeaders();
  const userId= getUserId();
  const url = `${ROOT_API_USER}/transaction`

  const responseAxios = await fetchAPI ({
      url,
      method : "get",
      data,
      headers,
  });
  return responseAxios;
};

export const getTransactionDialyAPI= async(data) => {
  const headers = getHeaders();
  const userId= getUserId();
  const url = `${ROOT_API_USER}/transaction/alltrans`

  const responseAxios =await fetchAPI({
      url, 
      method : "get",
      data,
      headers,
  });
  return responseAxios;
};

export const getContactAPI = async(data) => {
  const headers = getHeaders();
  const url = `${ROOT_API_USER}/detailuser`

  const responseAxios = await fetchAPI({
    url,
    method: "get",
    data,
    headers,
  });
  return responseAxios;
};

export const createTopUpAPI = async(data) => {
  const headers = getHeaders();
  const userId= getUserId();
  const url = `${ROOT_API_USER}/topup`

  const responseAxios= await fetchAPI({
    url,
    method : "post",
    data,
    headers,
  });
  return responseAxios;
};




