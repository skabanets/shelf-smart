import axios from "axios";

import type { Book } from "../types/book";

const apiUrl = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL: apiUrl,
});

export const getAllBooks = async (query: string = ""): Promise<Book[]> => {
  const { data } = await api.get(`/books?query=${query}`);
  return data;
};

export const deleteBookByIsbn = async (isbn: string): Promise<void> => {
  await api.delete(`/books/${isbn}`);
};
