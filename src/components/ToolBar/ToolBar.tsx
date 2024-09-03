import { BookForm } from "../BookForm/BookForm";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import { SearchBar } from "../SearchBar/SearchBar";

import { useModal } from "../../hooks";

interface ToolBarProps {
  search: string;
  setSearch: (search: string) => void;
}
export const ToolBar = ({ search, setSearch }: ToolBarProps & {}) => {
  const [isOpenModal, toggleModal] = useModal();

  return (
    <div className="flex w-full items-center justify-between">
      <SearchBar search={search} setSearch={setSearch} />
      <Button onClick={toggleModal} className="primary-btn w-[200px]">
        Add Book
      </Button>
      {isOpenModal && (
        <Modal toggleModal={toggleModal}>
          <BookForm toggleModal={toggleModal} />
        </Modal>
      )}
    </div>
  );
};
