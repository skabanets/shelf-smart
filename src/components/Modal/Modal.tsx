import ReactDOM from "react-dom";
import { IoClose } from "react-icons/io5";

import { useEscapeKeyClose } from "../../hooks";

interface ModalProps {
  children: React.ReactNode;
  toggleModal: () => void;
}

const modalRoot = document.querySelector("#modalRoot")!;

export const Modal = ({ children, toggleModal }: ModalProps) => {
  useEscapeKeyClose(toggleModal);

  const handleClickOnBackdrop = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return ReactDOM.createPortal(
    <div
      className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-40 backdrop-blur-md"
      onClick={handleClickOnBackdrop}
    >
      <div className="relative w-[96vw] rounded-md bg-primaryBgColor md:max-w-[400px]">
        <button type="button" onClick={toggleModal} className="absolute right-2.5 top-2.5">
          <IoClose className="size-6 fill-greyColor hover:fill-red-500" />
        </button>
        <div className="p-5">{children}</div>
      </div>
    </div>,
    modalRoot
  );
};
