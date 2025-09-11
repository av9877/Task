import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { useNavigate, useParams } from "react-router-dom";

const AddEditList = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    description: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const existing = JSON.parse(localStorage.getItem("list"));
    const currentList = Array.isArray(existing) ? existing : [];

    if (id && currentList[id]) {
      setData(currentList[id]);
    }
  }, [id]);

  // form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handlePhoneChange = (phone) => {
    setData((prev) => ({ ...prev, phone }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("list"));
    const currentList = Array.isArray(existing) ? existing : [];
    let updatedList;

    if (id) {
      // Edit
      updatedList = [...currentList];
      updatedList[id] = data;
    } else {
      // Add new
      updatedList = [...currentList, data];
    }

    localStorage.setItem("list", JSON.stringify(updatedList));
    setData({
      firstName: "",
      lastName: "",
      phone: "",
      description: "",
    });
    navigate("/tasklist");
  };

  return (
    <>
      <section>
        <button
          onClick={() => navigate("/tasklist")}
          className="bg-gray-500 text-[#fff] px-3 py-1 rounded-lg cursor-pointer hover:opacity-90"
        >
          Back
        </button>
        <div className="max-w-xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-[#fff] rounded-lg p-6 border border-gray-100 shadow"
          >
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
              onChange={handleChange}
              value={data.firstName}
              required
              className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              placeholder="Enter first name"
            />

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
              value={data.lastName}
              onChange={handleChange}
              required
              className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              placeholder="Enter last name"
            />

            <label
              className="block mb-2 font-medium text-gray-700"
              htmlFor="number"
            >
              Number
            </label>
            <PhoneInput
              value={data.phone}
              country={"in"}
              onChange={handlePhoneChange}
              inputClass="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
            />

            <label
              className="block mb-2 font-medium text-gray-700"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={data.description}
              onChange={handleChange}
              rows="4"
              className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              placeholder="Enter description"
            />

            <button
              type="submit"
              className="w-full bg-gray-600 text-white py-2 rounded-md hover:opacity-90 cursor-pointer transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
export default AddEditList;
