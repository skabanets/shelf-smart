import { useState } from "react";
import { Button, Input } from "../../components";

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
    <form
      onSubmit={handelSubmitForm}
      className="bg-tableRowEvenColor flex w-[320px] flex-col gap-7 p-4"
    >
      <h1 className="font-montserrat-semibold flex justify-center text-2xl">Add Book</h1>
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
