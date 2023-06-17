import axios from "axios";
import { API_NOTIFICATION_MESSAGE, serviceUrl } from "../Constant/config";

const API_URL = "http://localhost:8000";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// axiosInstance.interceptors.request.use takes two  callback function

axiosInstance.interceptors.request.use(
  function (config) {
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
    return Promise.reject(processError(error));
  }
);

const processResponse = (response) => {
  if (response?.status === 200) {
    return { isSuccess: true, data: response.data };
  } else {
    return {
      isfailure: true,
      status: response?.status,
      msg: response?.msg,
      code: response?.code,
    };
  }
};

const processError = (error) => {
  if (error.response) {
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGE.responsefailure,
      code: error.response.status,
    };
  } else if (error.request) {
    // frontend backend connectivity issue
    console.log("ERROR DURING request", error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGE.requestFailure,
      code: "",
    };
  } else {
    console.log("ERROR DURING request", error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGE.networkError,
      code: "",
    };
  }
};

const API = {};

for (const [key, value] of Object.entries(serviceUrl)) {
  API[key] = (body, showuploadprogress,showdownloadprogress) =>
    axiosInstance({
      method: value.method,
      url: value.url,
      data: body,
      responseType: value.responseType,
      // onUploadProgress: function (progressEvent) {
      //   if (showuploadprogress) {
      //     let percentagecompleted = Math.round(
      //       (progressEvent.loaded * 100) / progressEvent.total
      //     );
      //     showuploadprogress(percentagecompleted);
      //   }
      // },
      // onDownloadProgress: function (progressEvent) {
      //   if (showdownloadprogress) {
      //     let percentagecompleted = Math.round(
      //       (progressEvent.loaded * 100) / progressEvent.total
      //     );
      //     showdownloadprogress(percentagecompleted);
      //   }
      // },
    });
}

export { API };
