import { useNavigate } from "react-router-dom";
import Table from "../../components/table";

const Html = ({
  handleSearch,
  search,
  handleDelete,
  setEditIndex,
  setData,
  savedData,
}) => {
  const navigate = useNavigate();
  console.log(savedData);
  
  return (
    <>
      <section>
        <div className="container mx-auto px-5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center mb-4  gap-3">
              <h3 className="font-semibold text-2xl">Listing</h3>
              <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={handleSearch}
                value={search}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                placeholder="Search"
              />
            </div>
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
              setData={setData}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Html;
