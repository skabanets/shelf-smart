import { Book } from "@/types";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL: apiUrl,
});

export const getAllBooks = async (query: string = ""): Promise<Book[]> => {
  const { data } = await api.get(`/books?query=${query}`);

  return data;
};
