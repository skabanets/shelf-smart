import { TableHeader } from "./TableHeader";

import type { Book } from "../../types/book";
import { TableItem } from "./TableItem";

interface TableItemProps {
  books: Book[];
}

export const Table = ({ books }: TableItemProps) => {
  return (
    <table className="w-full text-center shadow-sm">
      <TableHeader />
      <tbody>
        {books.map((book, index) => (
          <TableItem key={book._id} book={book} number={index + 1} />
        ))}
      </tbody>
    </table>
  );
};
