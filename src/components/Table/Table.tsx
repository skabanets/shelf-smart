import { TableHeader } from "./TableHeader";
import { TableItem } from "./TableItem";

import type { Book } from "../../types/book";

interface TableItemProps {
  books: Book[];
  handleDeleteBook: (isbn: string) => void;
  handleEditBook: (book: Book, oldIsbn: string) => void;
}

export const Table = ({ books, handleDeleteBook, handleEditBook }: TableItemProps) => {
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
            handleEditBook={handleEditBook}
          />
        ))}
      </tbody>
    </table>
  );
};
