import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ViewCategory = () => {
  const { index } = useParams();
  const [item, setItem] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const viewData = JSON.parse(localStorage.getItem("list")) || [];
    if (viewData[index]) {
      setItem(viewData[index]);
    }
  }, []);
  console.log(item);

  return (
    <>
      <div className="p-5">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-500 text-[#fff] px-3 py-1 rounded-lg cursor-pointer hover:opacity-90"
          >
            Back
          </button>
          <h2 className="text-xl font-semibold ">View Contact</h2>
        </div>
        <p>
          <strong>First Name:</strong> {item.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {item.lastName}
        </p>
      </div>
    </>
  );
};
export default ViewCategory;
