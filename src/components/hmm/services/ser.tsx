import axios from "axios";

export const getBloodRecord = async (
  username: string = "",
  page: number,
  page_size: number
) => {
  const response = await axios({
    method: "get",
    url: `http://127.0.0.1:8000/api/blood-record/list?page=${page}&page_size=${page_size}&username=${username}`,
  });

  return response;
};

export const createBloodRecord = async (data: any) => {
  const response = await axios({
    method: "post",
    url: "http://127.0.0.1:8000/api/blood-record/create",
    data,
  });
  return response;
};

export const getLocation = async (data: any) => {
  try {
    const response = await axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/blood-record/test",
      data,
    });
    return response;
  } catch (error: any) {
    if (error.response.data.status === 400) {
      throw new Error(error.response.data.message);
    }
  }
};
