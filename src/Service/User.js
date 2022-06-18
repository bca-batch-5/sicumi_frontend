
import fetchAPI from "../Config/Api/index";

const ROOT_API_SICUMI = process.env.REACT_APP_API_SICUMI_DEV;

export const getDetailAPI = async(data) => {
    const url = `${ROOT_API_SICUMI}/DetailUser`

    const responseAxios = await fetchAPI({
        url,
        method : "get",
        data,
    });

    return responseAxios;
};

export const updateBalanceAPI = async(data)=>{
    const url = `${ROOT_API_SICUMI}/DetailUser/update/`

    const responseAxios =await fetchAPI({
        url,
        method : "put",
        data,
    });
    return responseAxios;
};

export const getTransferBySenderAPI = async(data) => {
    const url = `${ROOT_API_SICUMI}/transaction`

    const responseAxios = await fetchAPI({
        url,
        method : "post",
        data,
    });
    return responseAxios;
};

export const getAllTransactionAPI = async(data) => {
    const url = `${ROOT_API_SICUMI}/transaction`

    const responseAxios = await fetchAPI ({
        url,
        method : "get",
        data,
    });
    return responseAxios;
};

export const getTransactionDialyAPI= async(data) => {
    const url = `${ROOT_API_SICUMI}/transaction/alltrans`

    const responseAxios =await fetchAPI({
        url, 
        method : "get",
        data,
    });
    return responseAxios;
};