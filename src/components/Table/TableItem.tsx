import { toast } from "react-toastify";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

import { Button } from "../Button/Button";
import { BookForm } from "../BookForm/BookForm";

import { deleteBookByIsbn, markAsBorrowed } from "../../services/api";
import { Modal } from "../Modal/Modal";
import { useModal } from "../../hooks";
import type { Book } from "../../types/book";

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

  const handleChangeStatus = async (isbn: string) => {
    try {
      await markAsBorrowed(isbn, !book.isBorrowed);
      handleEditBook({ ...book, isBorrowed: !book.isBorrowed });
      toast.success("Book status changed successfully");
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
        <td>
          <Button
            onClick={() => handleChangeStatus(book.isbn)}
            className={`w-2/3 rounded p-2 ${book.isBorrowed ? "bg-statusBorrowedColor" : "bg-statusAvailableColor"}`}
            type="button"
          >
            {book.isBorrowed ? "Borrowed" : "Available"}
          </Button>
        </td>
        <td>
          <div className="flex w-full items-center justify-center gap-5">
            <Button onClick={toggleModal} type="button">
              <FaEdit className="size-6 fill-gray-800" />
            </Button>
            <Button onClick={() => handleDeleteBookByIsbn(book.isbn)} type="button">
              <FaTrashAlt className="size-6 fill-red-500 hover:fill-red-600" />
            </Button>
          </div>
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
