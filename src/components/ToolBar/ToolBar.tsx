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
  hideSearch: boolean;
}
export const ToolBar = ({ search, setSearch, handleAddBook, hideSearch }: ToolBarProps & {}) => {
  const [isOpenModal, toggleModal] = useModal();

  return (
    <div className="flex w-full items-center justify-between">
      {!hideSearch && <SearchBar search={search} setSearch={setSearch} />}
      <Button onClick={toggleModal} className="primary-btn ml-auto w-[200px]">
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
