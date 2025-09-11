const TaskForm = ({ data, handleChange, handleSubmit }) => {
  return (
    <section>
      <form onSubmit={handleSubmit}>
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
        <input
          id="phone"
          name="phone"
          type="tel"
          value={data.phone}
          onChange={handleChange}
          required
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
          placeholder="Enter phone"
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
    </section>
  );
};
export default TaskForm;
