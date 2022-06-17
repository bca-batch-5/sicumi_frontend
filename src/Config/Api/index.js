import axios from "axios";

const fetchAPI = async ({ url, method, data }) => {
  const responseAxios = await axios({
    url,
    method,
    data,
  }).catch((err) => err.response);

  return responseAxios;
};

// export const getId = () => {
// const user = JSON.parse(localStorage.getItem("user"));
// const id = 1;
// return id;
// if (user) {
//   const id = user.id;
//   return id;
// }
// console.log(user, "from getHeaders");
// return null;
// };

export default fetchAPI;
