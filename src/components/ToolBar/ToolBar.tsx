import { useModal } from "../../hooks";
import { Button, SearchBar } from "../../components";
import { Modal } from "../Modal/Modal";
import { BookForm } from "../BookForm/BookForm";

export const ToolBar = () => {
  const [isOpenModal, toggleModal] = useModal();

  return (
    <div className="flex w-full items-center justify-between">
      <SearchBar />
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
