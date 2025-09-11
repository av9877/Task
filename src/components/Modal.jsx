const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 z-50 p-6 flex items-center justify-center bg-black/50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative h-auto max-h-screen overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute cursor-pointer top-2 right-4 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
          {children}
        </div>
      </div>
    </>
  );
};
export default Modal;
