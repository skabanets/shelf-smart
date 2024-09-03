import axios from "axios";

import type { Book } from "../types/book";

const apiUrl = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL: apiUrl,
});

export const getAllBooks = async (query: string = ""): Promise<Book[]> => {
  try {
    const { data } = await api.get(`/books?query=${query}`);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || "An error occurred");
    }
    throw new Error("An unknown error occurred");
  }
};

export const addBook = async (book: Omit<Book, "_id">): Promise<Book> => {
  try {
    const newBook = await api.post(`/books`, book);
    return newBook.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || "An error occurred");
    }
    throw new Error("An unknown error occurred");
  }
};

export const updateBook = async (isbn: string, book: Omit<Book, "_id">): Promise<Book> => {
  try {
    const { data } = await api.put(`/books/${isbn}`, book);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || "An error occurred");
    }
    throw new Error("An unknown error occurred");
  }
};

export const deleteBookByIsbn = async (isbn: string): Promise<void> => {
  try {
    await api.delete(`/books/${isbn}`);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || "An error occurred");
    }
    throw new Error("An unknown error occurred");
  }
};
