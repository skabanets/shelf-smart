import { useState } from "react";
import { toast } from "react-toastify";

import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { addBook, updateBook } from "../../services/api";
import { Book } from "../../types/book";

interface BookFormProps {
  book?: Book;
  toggleModal: () => void;
  handleAddBook?: (book: Book) => void;
  handleEditBook?: (book: Book, oldIsbn: string) => void;
}

export const BookForm = ({ book, toggleModal, handleAddBook, handleEditBook }: BookFormProps) => {
  const [isbn, setIsbn] = useState(book ? book.isbn : "");
  const [title, setTitle] = useState(book ? book.title : "");
  const [author, setAuthor] = useState(book ? book.author : "");
  const [isBorrowed, setIsBorrowed] = useState(book ? book.isBorrowed : false);

  const handelSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const bookData = {
      isbn,
      title,
      author,
      isBorrowed,
    };

    try {
      if (book) {
        const newBook = await updateBook(book.isbn, bookData);
        if (handleEditBook) handleEditBook(newBook, book.isbn);
        toast.success("Book edited successfully");
      } else {
        const newBook = await addBook(bookData);
        if (handleAddBook) handleAddBook(newBook);
        toast.success("Book added successfully");
      }

      toggleModal();
    } catch (error) {
      toast.error(error instanceof Error && error.message);
    }
  };

  return (
    <form onSubmit={handelSubmitForm} className="flex flex-col gap-7">
      <h1 className="flex justify-center font-montserrat-semibold text-2xl text-greyColor">
        {book ? "Edit Book" : "Add Book"}
      </h1>
      <div className="flex flex-col gap-2.5">
        <Input
          label="ISBN"
          value={isbn}
          changeValue={setIsbn}
          placeholder="Example 978-3-16-148410-0"
          required
        />
        <Input
          label="Title"
          value={title}
          changeValue={setTitle}
          placeholder="Enter title"
          required
        />
        <Input
          label="Author"
          value={author}
          changeValue={setAuthor}
          placeholder="Enter author"
          required
        />
        {book && (
          <div className="flex items-center justify-start gap-4 pt-1">
            <label>
              Status: <span>{isBorrowed ? "Borrowed" : "Available"}</span>{" "}
            </label>
            <input
              type="checkbox"
              checked={isBorrowed}
              onChange={() => setIsBorrowed(!isBorrowed)}
              className="cursor-pointer"
            />
          </div>
        )}
      </div>
      <Button type="submit" className="primary-btn w-full">
        {book ? "Update" : "Add"}
      </Button>
    </form>
  );
};
