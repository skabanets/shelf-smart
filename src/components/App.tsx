import { useEffect, useState } from "react";

import { Table } from "./Table/Table";
import { ToolBar } from "./ToolBar/ToolBar";

import { getAllBooks } from "../services/api";
import type { Book } from "../types";

export const App = () => {
  const [fetching, setFetching] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const handlePopState = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const searchQuery = searchParams.get("query") || "";
      setSearch(searchQuery);
    };

    handlePopState();

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    setFetching(true);
    getAllBooks(search ? search : "")
      .then(setBooks)
      .catch(() => {
        console.error("Something went wrong. Reload page or try again later!");
      })
      .finally(() => setFetching(false));
  }, [search]);

  return (
    <>
      {fetching && <div>Loader...</div>}
      <main>
        <section className="container flex flex-col gap-12 py-[60px]">
          <ToolBar />
          <Table books={books} />
        </section>
      </main>
    </>
  );
};
