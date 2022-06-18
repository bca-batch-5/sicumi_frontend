import axios from "axios";

const fetchAPI = async ({ url, method, data, headers }) => {
  const responseAxios = await axios({
    url,
    method,
    data,
    headers: headers,
  }).catch((err) => err.response);

  return responseAxios;
};

export const getHeaders = () => {
    const token = getToken();
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return headers;
  };
  
  export const getToken = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      const token = user.accessToken;
      return token;
    }
    console.log(user, "from getHeaders");
    return null;
  };


export default fetchAPI;