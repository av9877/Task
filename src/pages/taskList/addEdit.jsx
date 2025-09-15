import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { useNavigate, useParams } from "react-router-dom";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-country-state-city/dist/react-country-state-city.css";
import { CountrySelect, StateSelect } from "react-country-state-city";


const AddEditList = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    date: "",
    level: "",
    country: "",
    countryId:"",
    state: "",
    category: [],
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

  // form handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handlePhoneChange = (phone) => {
    setData((prev) => ({ ...prev, phone: phone }));
  };
  const handleQuillChange = (desc) => {
    setData((prev) => ({ ...prev, description: desc }));
  };
  const handleDateChange = (date) => {
    setData((prev) => ({
      ...prev,
      date: date,
    }));
  };

  const handleLevelChange = (data) => {
    setData((prev) => ({
      ...prev,
      level: data?.value,
    }));
  };

  const handleCountryChange = (country) => {
    console.log(country, "country");
    setData((prev) => ({
      ...prev,
      country: country.name,
      countryId:country.id

    }));
  };

  const handleStateChange = (state) => {
    console.log(state,'state');
    setData((prev) => ({
      ...prev,
      state: state.isoCode,
    }));
  };

  // select options
  const options = [
    { value: "easy", label: "Easy" },
    { value: "medium", label: "Medium" },
    { value: "hard", label: "Hard" },
  ];

  const Category = [
    { value: "cat1", label: "cat1" },
    { value: "cat2", label: "cat2" },
    { value: "cat3", label: "cat3" },
    { value: "cat4", label: "cat4" },
  ];

  const selectedOption = options.find((option) => option.value === data.level);
  const categoryOption = Category.filter((option) =>
    data.category.includes(option.value)
  );
  const handleCategoryChange = (data) => {
    const values = data.map((option) => option.value);
    setData((prev) => ({
      ...prev,
      category: values,
    }));
  };

  // form
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
      date: "",
      level: "",
      country: "",
      countryId:"",
      state: "",
      category: [],
      description: "",
    });
    navigate("/tasklist");
  };
  // today's date
  const today = new Date();
  
  return (
    <>
      <section>
        <button
          onClick={() => navigate("/tasklist")}
          className="bg-gray-500 text-[#fff] px-3 py-1 rounded-lg cursor-pointer hover:opacity-90 mb-4"
        >
          Back
        </button>
        <div className="container px-5 mx-auto">
          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 bg-[#fff] rounded-lg p-4 border border-gray-100 shadow"
          >
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
                onChange={handleChange}
                value={data.firstName}
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
                value={data.lastName}
                onChange={handleChange}
                required
                className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                placeholder="Enter last name"
              />
            </div>
            <div>
              <label
                className="block mb-2 font-medium text-gray-700"
                htmlFor="lastName"
              >
                Country
              </label>
              <div className="mb-3">
                <CountrySelect
                  value={data.country}
                  defaultValue={data.country}
                  name="country"
                  onChange={handleCountryChange}
                  placeHolder="Select Country"
                />
              </div>
            </div>
            <div>
              <label
                className="block mb-2 font-medium text-gray-700"
                htmlFor="lastName"
              >
                State
              </label>
              <div className="mb-3">
                <StateSelect
                  country={data.countryId}
                  value={data.state}
                  name="state"
                  onChange={handleStateChange}
                  placeHolder="Select state"
                />
              </div>
            </div>
            <div>
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
            </div>

            <div>
              <label
                className="block mb-2 font-medium text-gray-700"
                htmlFor="number"
              >
                End Date
              </label>
              <div>
                <DatePicker
                  selected={data.date}
                  placeholderText="Select a date"
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  showYearDropdown
                  minDate={today}
                  className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label
                className="block mb-2 font-medium text-gray-700"
                htmlFor="number"
              >
                Difficulty Level
              </label>
              <div className="mb-4">
                <Select
                  classNamePrefix="custom-select"
                  value={selectedOption}
                  onChange={handleLevelChange}
                  options={options}
                />
              </div>
            </div>

            <div>
              <label
                className="block mb-2 font-medium text-gray-700"
                htmlFor="number"
              >
                Category
              </label>
              <div className="mb-4">
                <Select
                  isMulti
                  classNamePrefix="custom-select"
                  value={categoryOption}
                  onChange={handleCategoryChange}
                  options={Category}
                  closeMenuOnSelect={false}
                  className="outline-none focus:outline-none focus:ring-0"
                />
              </div>
            </div>

            <div className="md:col-span-2 lg:col-span-3">
              <label
                className="block mb-2 font-medium text-gray-700"
                htmlFor="description"
              >
                Description
              </label>
              <ReactQuill
                className="w-full mb-4  rounded-md focus:outline-none"
                name="description"
                placeholder="enter description"
                value={data.description}
                onChange={handleQuillChange}
              />
            </div>
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
export default AddEditList;
