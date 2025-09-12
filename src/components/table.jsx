import moment from "moment";
import { AiFillEdit } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Table = ({
  savedData,
  setData,
  navigate,
  handleDelete,
  setEditIndex,
}) => {

  return (
    <>
      <div className="overflow-x-auto mt-5">
        <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                Sr.no.
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                First Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                Last Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                Country
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                End Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                Level
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                Category
              </th>
              <th className="w-[250px] px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                Description
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
                  {i + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {item.firstName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {item.lastName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {item.phone}
                </td>
                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {item.country}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {moment(item.date).format("DD/MM/YYYY")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {item.level}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  <div className="flex gap-2">
                    {item.category.map((val, i) => (
                      <div
                        key={i}
                        className="bg-gray-200 text-[#000] px-2 py-1 rounded-lg"
                      >
                        {val}
                      </div>
                    ))}
                  </div>
                </td>
                <td
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        navigate(`/tasklist/edit/${i}`),
                          setData(item),
                          setEditIndex(i);
                      }}
                      className="bg-gray-600 rounded-lg cursor-pointer hover:opacity-90 p-1.5 text-[#fff]"
                    >
                      <AiFillEdit />
                    </button>
                    <button
                      onClick={() => navigate(`/tasklist/view/${i}`)}
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
    </>
  );
};

export default Table;
