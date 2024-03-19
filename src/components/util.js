import axios from "axios";
//https://api.iegcambodia.com

export const Apirequest = async (
  endpoint,
  method = "GET",
  data = null,
  headers = {}
) => {
  const url = import.meta.env.VITE_API_URL + endpoint;

  // Setting up the options for the Axios request
  const options = {
    method: method,
    url: url,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    data: data ? JSON.stringify(data) : undefined,
  };

  // If the method is GET, remove the data to avoid errors
  if (method.toUpperCase() === "GET") {
    delete options.data;
  }

  try {
    const response = await axios({ ...options, withCredentials: true });

    // The response object from Axios already contains the data within the `data` attribute
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Axios error: ", error);
    // You might want to handle errors differently depending on whether they are Axios errors or HTTP errors
    return {
      success: false,
      message: error.response?.data?.message ?? error?.message,
      status: error.response?.status,
    };
  }
};

export const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};
