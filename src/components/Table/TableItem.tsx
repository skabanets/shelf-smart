import type { Book } from "../../types/book";

interface TableItemProps {
  book: Book;
  number: number;
}
export const TableItem = ({ book, number }: TableItemProps) => {
  return (
    <tr className="tr-style odd:bg-secondaryBgColor h-[64px] font-medium">
      <td>{number}</td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.isbn}</td>
      <td>{book.isBorrowed ? "Borrowed" : "Available"}</td>
      <td>Actions</td>
    </tr>
  );
};
