import { useNavigate } from "react-router-dom";
import Table from "../../components/table";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";

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
              onClick={() => navigate("/category/add")}
              className="bg-gray-600 rounded-lg px-3 py-1 text-[#fff] cursor-pointer hover:opacity-90"
            >
              Add +
            </button>
          </div>
          <div>
            <div className="overflow-x-auto mt-5">
              <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                      First Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                      Last Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {savedData.map((item, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {item.firstName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {item.lastName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => navigate(`/category/edit/${i}`)}
                            className="bg-gray-600 rounded-lg cursor-pointer hover:opacity-90 p-1.5 text-[#fff]"
                          >
                            <AiFillEdit />
                          </button>
                          <button
                            onClick={() => navigate(`/category/view/${i}`)}
                            className="bg-gray-600 rounded-lg cursor-pointer hover:opacity-90 p-1.5 text-[#fff]"
                          >
                            <FaEye />
                          </button>
                          <button
                            onClick={() => handleDelete(i)}
                            className="bg-gray-600 rounded-lg cursor-pointer hover:opacity-90 p-1.5 text-[#fff]"
                          >
                            <MdDelete />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Html;
