import axios from "axios";
import { API_NOTIFICATION_MESSAGE, serviceUrl } from "../Constant/config";
import { getAuthorized, getType } from "../utils/common-utils";
import { Navigate } from "react-router-dom";

const API_URL = "http://localhost:8000";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

// axiosInstance.interceptors.request.use takes two  callback function

axiosInstance.interceptors.request.use(
  function (config) {
    if (config.TYPE.params) {
      config.params = config.TYPE.params;
    } else if (config.TYPE.query) {
      config.url = config.url + "/" + config.TYPE.query;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (res) {
    //stop the loader here
    return processResponse(res);
  },
  function (error) {
   
    // if (error) {
    //   if (error.response.status == 404) {
        
    //     localStorage.clear()
    //     return <Navigate replace to="/login" />
    //   }
    // }
    return Promise.reject(error);
  }
);

const processResponse = (response) => {
  if (response?.status === 200) {
    return { isSuccess: true, data: response.data };
  }
  // else {
  //   return {
  //     isfailure: true,
  //     status: response?.status,
  //     msg: response?.msg,
  //     code: response?.code,
  //   };
  // }
};

// const processError = (error) => {
//   if (error.response) {
//     return {
//       isError: true,
//       msg: API_NOTIFICATION_MESSAGE.responsefailure,
//       code: error.response.status,
//     };
//   } else if (error.request) {
//     // frontend backend connectivity issue
//     console.log("ERROR DURING request", error.toJSON());
//     return {
//       isError: true,
//       msg: API_NOTIFICATION_MESSAGE.requestFailure,
//       code: "",
//     };
//   } else {
//     console.log("ERROR DURING request", error.toJSON());
//     return {
//       isError: true,
//       msg: API_NOTIFICATION_MESSAGE.networkError,
//       code: "",
//     };
//   }
// };

const API = {};

for (const [key, value] of Object.entries(serviceUrl)) {
  API[key] = (body, showuploadprogress, showdownloadprogress) => {
    const headers =
      value.url === "/file/upload"
        ? { "Content-Type": "multipart/form-data" }
        : { "Content-Type": "application/json" };

    return axiosInstance({
      method: value.method,
      url: value.url,
      data: value.method === "DELETE" ? {} : body,
      headers: { ...headers, authorization: getAuthorized() },
      TYPE: getType(value, body),
      responseType: value.responseType,
      onUploadProgress: function (progressEvent) {
        if (showuploadprogress) {
          let percentagecompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showuploadprogress(percentagecompleted);
        }
      },
      onDownloadProgress: function (progressEvent) {
        if (showdownloadprogress) {
          let percentagecompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showdownloadprogress(percentagecompleted);
        }
      },
    });
  };
}

export { API };
