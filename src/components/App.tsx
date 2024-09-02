import { Table } from "./Table/Table";
import { ToolBar } from "./ToolBar/ToolBar";

const books = [
  {
    _id: "66d5dff7d34c04be08750c19",
    isbn: "978-0-14-028329-7",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    isBorrowed: false,
  },
  {
    _id: "66d5dff7d34c04be08750c19",
    isbn: "978-0-14-028329-7",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    isBorrowed: false,
  },
];
export const App = () => {
  return (
    <main>
      <section className="container flex flex-col gap-12 py-[60px]">
        <ToolBar />
        <Table books={books} />
      </section>
    </main>
  );
};
