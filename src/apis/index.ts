import axios, { AxiosResponse } from "axios";
import { IMAGES_API_HOST } from "@/constants";
import { type ImageListResponse } from "@/types";

const HEADERS = {
  "Content-Type": "application/json",
};

export const axiosInstance = axios.create({ headers: HEADERS });

// Actions
export const fetchImages = async (
  limit: number = 10
): Promise<AxiosResponse> => {
  const url = `${IMAGES_API_HOST}?page=3&limit=${limit}`;

  return axiosInstance.get<ImageListResponse, AxiosResponse>(url);
};
