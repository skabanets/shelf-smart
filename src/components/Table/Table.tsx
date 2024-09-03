import { TableHeader } from "./TableHeader";

import type { Book } from "../../types/book";
import { TableItem } from "./TableItem";

interface TableItemProps {
  books: Book[];
  handleDeleteBook: (isbn: string) => void;
}

export const Table = ({ books, handleDeleteBook }: TableItemProps) => {
  return (
    <table className="w-full text-center shadow-sm">
      <TableHeader />
      <tbody>
        {books.map((book, index) => (
          <TableItem
            key={book._id}
            book={book}
            number={index + 1}
            handleDeleteBook={handleDeleteBook}
          />
        ))}
      </tbody>
    </table>
  );
};
