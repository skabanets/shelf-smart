import { useEffect, useState } from "react";

import { Table } from "./Table/Table";
import { ToolBar } from "./ToolBar/ToolBar";
import { Loader } from "./Loader/Loader";

import { getAllBooks } from "../services/api";
import type { Book } from "../types/book";
import { Message } from "./Message/Message";

export const App = () => {
  const [fetching, setFetching] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    let timeoutId: number;

    if (search) {
      timeoutId = setTimeout(() => {
        getAllBooks(search)
          .then(setBooks)
          .catch(() => console.error("Something went wrong. Reload page or try again later!"));
      }, 500);
    } else {
      setFetching(true);
      getAllBooks("")
        .then(setBooks)
        .catch(() => console.error("Something went wrong. Reload page or try again later!"))
        .finally(() => setFetching(false));
    }

    return () => clearTimeout(timeoutId);
  }, [search]);

  const handleAddBook = (book: Book) => {
    setBooks([...books, book]);
  };
  const handleEditBook = (book: Book) => {
    setBooks(books.map(b => (b.isbn === book.isbn ? book : b)));
  };

  const handleDeleteBook = (isbn: string) => {
    setBooks(books.filter(book => book.isbn !== isbn));
  };

  if (fetching) return <Loader />;

  return (
    <>
      <main>
        <section className="container flex flex-col gap-12 py-[60px]">
          <ToolBar
            hideSearch={books.length === 0 && !search ? true : false}
            search={search}
            setSearch={setSearch}
            handleAddBook={handleAddBook}
          />
          {books.length === 0 && search && <Message text={"Nothing found"} />}
          {books.length === 0 && !search && <Message text={"No books in library. Add new Book."} />}
          {books.length > 0 && (
            <Table
              books={books}
              handleDeleteBook={handleDeleteBook}
              handleEditBook={handleEditBook}
            />
          )}
        </section>
      </main>
    </>
  );
};
