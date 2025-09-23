import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddEditCategory = () => {
  const [data, setData] = useState([{ firstName: "", lastName: "" }]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const existing = JSON.parse(localStorage.getItem("list")) || [];
    if (id) {
      const item = existing[id];      
      setData([item]);
    } else {
      setData([{ firstName: "", lastName: "" }]);
    }
  }, [id]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setData((prev) => {
      const newData = [...prev];
      newData[index] = { ...newData[index], [name]: value };
      return newData;
    });
  };
  
  // form
  const handleSubmit = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("list")) || [];
    let updatedList;

    if (id) {
      updatedList = [...existing];
      // updatedList.splice(id, data.length, ...data);
    } else {
      updatedList = [...existing, ...data];
    }

    localStorage.setItem("list", JSON.stringify(updatedList));
    setData([
      {
        firstName: "",
        lastName: "",
      },
    ]);
    navigate("/category");
  };
  const handleAddMore = () => {
    setData((prev) => [...prev, { firstName: "", lastName: "" }]);
  };
  const handleDelete = (i) => {
    setData((prev) => prev.filter((_, index) => index !== i));
  };
  return (
    <>
      <section>
        <div className="flex justify-between items-center gap-3">
          <button
            onClick={() => navigate("/category")}
            className="bg-gray-500 text-[#fff] px-3 py-1 rounded-lg cursor-pointer hover:opacity-90 mb-4"
          >
            Back
          </button>
          <button
            onClick={handleAddMore}
            className="bg-gray-500 text-[#fff] px-3 py-1 rounded-lg cursor-pointer hover:opacity-90 mb-4"
          >
            Add More
          </button>
        </div>
        <div className="container px-5 mx-auto">
          <form
            onSubmit={handleSubmit}
            className=" bg-[#fff] rounded-lg p-4 border border-gray-100 shadow"
          >
            {data.map((res, i) => (
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4" key={i}>
                <div>
                  <label
                    className="block mb-2 font-medium text-gray-700"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={(e) => handleChange(e, i)}
                    value={res.firstName}
                    required
                    className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                    placeholder="Enter first name"
                  />
                </div>

                <div>
                  <label
                    className="block mb-2 font-medium text-gray-700"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={res.lastName}
                    onChange={(e) => handleChange(e, i)}
                    required
                    className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                    placeholder="Enter last name"
                  />
                </div>
                {i > 0 && (
                  <button
                    type="button"
                    onClick={() => handleDelete(i)}
                    className="bg-red-500 rounded-lg px-4 py-1 text-[#fff]"
                  >
                    delete
                  </button>
                )}
              </div>
            ))}
            <div className="flex justify-end col-span-full">
              <button
                type="submit"
                className="ml-auto px-5 bg-gray-600 text-white py-2 rounded-md hover:opacity-90 cursor-pointer transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default AddEditCategory;
