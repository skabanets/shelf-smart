import { toast } from "react-toastify";

import { Button } from "../Button/Button";

import { deleteBookByIsbn } from "../../services/api";
import type { Book } from "../../types/book";
import { useModal } from "../../hooks";
import { BookForm } from "../BookForm/BookForm";
import { Modal } from "../Modal/Modal";

interface TableItemProps {
  book: Book;
  number: number;
  handleDeleteBook: (isbn: string) => void;
  handleEditBook: (book: Book) => void;
}
export const TableItem = ({ book, number, handleDeleteBook, handleEditBook }: TableItemProps) => {
  const [isOpenModal, toggleModal] = useModal();

  const handleDeleteBookByIsbn = async (isbn: string) => {
    try {
      await deleteBookByIsbn(isbn);
      handleDeleteBook(isbn);
      toast.success("Book deleted successfully");
    } catch (error) {
      toast.error("Something went wrong. Reload page or try again later!");
    }
  };

  return (
    <>
      <tr className="tr-style odd:bg-secondaryBgColor h-[64px] font-medium">
        <td>{number}</td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.isbn}</td>
        <td>{book.isBorrowed ? "Borrowed" : "Available"}</td>
        <td className="space-x-4">
          <Button onClick={() => handleDeleteBookByIsbn(book.isbn)}>Delete</Button>
          <Button onClick={toggleModal}>Edit</Button>
        </td>
      </tr>
      {isOpenModal && (
        <Modal toggleModal={toggleModal}>
          <BookForm toggleModal={toggleModal} book={book} handleEditBook={handleEditBook} />
        </Modal>
      )}
    </>
  );
};
