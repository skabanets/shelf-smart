import { useState } from "react";
import { toast } from "react-toastify";

import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { addBook } from "../../services/api";

interface BookFormProps {
  toggleModal: () => void;
}

export const BookForm = ({ toggleModal }: BookFormProps) => {
  const [isbn, setIsbn] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handelSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const bookData = {
      isbn,
      title,
      author,
      isBorrowed: false,
    };

    try {
      await addBook(bookData);
      toast.success("Book added successfully");
      toggleModal();
    } catch (error) {
      toast.error(error instanceof Error && error.message);
    }
  };

  return (
    <form onSubmit={handelSubmitForm} className="flex flex-col gap-7">
      <h1 className="flex justify-center font-montserrat-semibold text-2xl text-greyColor">
        Add Book
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
      </div>
      <Button type="submit" className="primary-btn w-full">
        Add{" "}
      </Button>
    </form>
  );
};
