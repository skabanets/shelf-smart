import { Button } from "../Button/Button";

import { deleteBookByIsbn } from "../../services/api";
import type { Book } from "../../types/book";

interface TableItemProps {
  book: Book;
  number: number;
  handleDeleteBook: (isbn: string) => void;
}
export const TableItem = ({ book, number, handleDeleteBook }: TableItemProps) => {
  const handleDeleteBookByIsbn = async (isbn: string) => {
    try {
      await deleteBookByIsbn(isbn);
      handleDeleteBook(isbn);
    } catch (error) {
      console.log("Something went wrong. Reload page or try again later!");
    }
  };

  return (
    <tr className="tr-style odd:bg-secondaryBgColor h-[64px] font-medium">
      <td>{number}</td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.isbn}</td>
      <td>{book.isBorrowed ? "Borrowed" : "Available"}</td>
      <td>
        <Button onClick={() => handleDeleteBookByIsbn(book.isbn)}>Delete</Button>
      </td>
    </tr>
  );
};
