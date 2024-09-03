import { BookForm } from "../BookForm/BookForm";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import { SearchBar } from "../SearchBar/SearchBar";

import { useModal } from "../../hooks";
import type { Book } from "../../types/book";

interface ToolBarProps {
  search: string;
  setSearch: (search: string) => void;
  handleAddBook: (book: Book) => void;
}
export const ToolBar = ({ search, setSearch, handleAddBook }: ToolBarProps & {}) => {
  const [isOpenModal, toggleModal] = useModal();

  return (
    <div className="flex w-full items-center justify-between">
      <SearchBar search={search} setSearch={setSearch} />
      <Button onClick={toggleModal} className="primary-btn w-[200px]">
        Add Book
      </Button>
      {isOpenModal && (
        <Modal toggleModal={toggleModal}>
          <BookForm toggleModal={toggleModal} handleAddBook={handleAddBook} />
        </Modal>
      )}
    </div>
  );
};
