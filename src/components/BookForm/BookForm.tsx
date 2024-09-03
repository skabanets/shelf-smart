import { useState } from "react";

import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

export const BookForm = () => {
  const [isbn, setIsbn] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handelSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const bookData = {
      isbn,
      title,
      author,
    };

    console.log("Book Data:", bookData);
  };

  return (
    <form onSubmit={handelSubmitForm} className="flex flex-col gap-7">
      <h1 className="flex justify-center font-montserrat-semibold text-2xl text-greyColor">
        Add Book
      </h1>
      <div className="flex flex-col gap-2.5">
        <Input label="ISBN" value={isbn} changeValue={setIsbn} placeholder="Book ISBN" required />
        <Input
          label="Title"
          value={title}
          changeValue={setTitle}
          placeholder="Book title"
          required
        />
        <Input
          label="Author"
          value={author}
          changeValue={setAuthor}
          placeholder="Book author"
          required
        />
      </div>
      <Button type="submit" className="primary-btn w-full">
        Add{" "}
      </Button>
    </form>
  );
};
