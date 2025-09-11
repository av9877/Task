import Modal from "../../components/Modal";
import TaskForm from "../../components/task/TaskForm";
import Table from "../../components/table";

const Html = ({
  setModalOpen,
  handleDelete,
  setEditIndex,
  setData,
  savedData,
  isModalOpen,
  data,
  handleChange,
  handleSubmit,
  navigate
}) => {
    
  return (
    <>
      <section>
        <div className="container mx-auto px-5">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-semibold text-2xl">Listing</h3>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-gray-600 rounded-lg px-3 py-1 text-[#fff] cursor-pointer hover:opacity-90"
            >
              Add +
            </button>
          </div>
          <div>
            <Table
              setModalOpen={setModalOpen}
              handleDelete={handleDelete}
              savedData={savedData}
              setEditIndex={setEditIndex}
              navigate={navigate}
              setData={setData}
            />
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <h2 className="text-xl font-semibold text-center mb-4">
            Contact Form
          </h2>
          <TaskForm
            data={data}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </Modal>
      </section>
    </>
  );
};

export default Html;
