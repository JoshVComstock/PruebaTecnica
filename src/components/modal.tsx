import { ReactNode } from "react";

interface ModalProps {
    open: boolean;
    close: () => void;
    children: ReactNode;
}
const Modal = ({ open, close, children }: ModalProps) => {
    return open ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-gray-700 p-4 rounded flex flex-col justify-end items-end">
                <button onClick={close} className="mb-4 text-white border-b-2 border-transparent hover:border-white hover:border-b-2 ">
                    X
                </button>
                {children}
            </div>
        </div>
    ) : null;
};
export default Modal;