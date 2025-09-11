import Table from "../../components/table";

const Html = ({
  handleDelete,
  setEditIndex,
  setData,
  savedData,
  navigate,
}) => {
  return (
    <>
      <section>
        <div className="container mx-auto px-5">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-semibold text-2xl">Listing</h3>
            <button
              onClick={() => navigate("/tasklist/add")}
              className="bg-gray-600 rounded-lg px-3 py-1 text-[#fff] cursor-pointer hover:opacity-90"
            >
              Add +
            </button>
          </div>
          <div>
            <Table
              handleDelete={handleDelete}
              savedData={savedData}
              setEditIndex={setEditIndex}
              navigate={navigate}
              setData={setData}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Html;
