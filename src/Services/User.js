import fetchAPI, { getHeaders, getUserId } from "../Config/FetchAxios";

const ROOT_API_USER = process.env.REACT_APP_API_USER;
const ROOT_API_SICUMI = process.env.REACT_APP_API_SICUMI;

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

export const getDetailAPI = async(data) => {
  const headers = getHeaders();
  const userId= getUserId();
  const url = `${ROOT_API_SICUMI}/detailuser/${userId}`

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
  const url = `${ROOT_API_SICUMI}/detailuser/update/${userId}`

  const responseAxios =await fetchAPI({
      url,
      method : "put",
      data,
      headers,
  });
  return responseAxios;
};

export const createTransferAPI = async(data) => {
  const headers = getHeaders();
  const userId= getUserId();
  const url = `${ROOT_API_SICUMI}/transaction/${userId}`

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
  const url = `${ROOT_API_SICUMI}/transaction/${userId}`

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
  const url = `${ROOT_API_SICUMI}/transaction/alltrans`

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
  const url = `${ROOT_API_SICUMI}/detailuser`

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
  const url = `${ROOT_API_SICUMI}/topup`

  const responseAxios= await fetchAPI({
    url,
    method : "post",
    data,
    headers,
  });
  return responseAxios;
};

export const getReceiverAPI = async(userId) => {
  const getUserId= userId;
  const url = `${ROOT_API_SICUMI}/detailuser/${getUserId}`;
  const headers = getHeaders();

  const responseAxios = await fetchAPI({
    url, 
    method :"get",
    headers,
  });
  return responseAxios;
};

export const checkPin = async(data) =>{
  const userId= getUserId();
  const url = `${ROOT_API_SICUMI}/user/${userId}`;
  const headers = getHeaders();

  const responseAxios = await fetchAPI({
    url,
    method : "get",
    data,
    headers,
  });
return responseAxios;
};



