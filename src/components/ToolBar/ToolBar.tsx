import { useModal } from "../../hooks";
import { Button, SearchBar } from "../../components";
import { Modal } from "../Modal/Modal";
import { BookForm } from "../BookForm/BookForm";

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
          <BookForm />
        </Modal>
      )}
    </div>
  );
};
