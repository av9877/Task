import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ViewTask = () => {
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
        <p>
          <strong>Phone:</strong> {item.phone}
        </p>
        <p>
          <strong>End Date:</strong> {moment(item.date).format("DD/MM/YYYY")}
        </p>
        <p>
          <strong>Country:</strong> {item.country}
        </p>
        <p>
          <strong>State:</strong> {item.state}
        </p>
        <p>
          <strong>Level:</strong> {item.level}
        </p>
        <div className="flex items-center gap-1">
          <strong>Category:</strong>{" "}
          <div className="flex gap-2">
            {item.category?.map((val, i) => (
              <div
                key={i}
                className="bg-gray-200 text-[#000] px-2 py-1 rounded-lg"
              >
                {val}
              </div>
            ))}
          </div>
        </div>

        <p className="flex items-center gap-1">
          <strong>Description:</strong>
          <span dangerouslySetInnerHTML={{ __html: item.description }}></span>
        </p>
      </div>
    </>
  );
};
export default ViewTask;
