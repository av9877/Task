import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductAddEdit = () => {
  const [data, setData] = useState({
    id:"",
    title: "",
    description: "",
  });
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      id:data.id,
      title: data.title,
      description: data.description,
    };
    if (data.title && data.description) {
      const currentData = JSON.parse(localStorage.getItem("product")) || [];
      const updatedData = [...currentData, item];
      localStorage.setItem('product', JSON.stringify(updatedData))
      console.log(updatedData);
      setData({
        id:"",
        title: "",
        description: "",
      });
      navigate('/product')
    } else {
      return alert("empty data");
    }
  };

  return (
    <>
      <section>
        <div className="container px-5 max-auto">
          <form action="" onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700">
                Id
              </label>
              <input
                name="id"
                type="text"
                onChange={(e) =>
                  setData((prev) => ({ ...prev, id: e.target.value }))
                }
                value={data.id}
                required
                className="w-full  px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                placeholder="Enter id"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700">
                Title
              </label>
              <input
                name="title"
                type="text"
                onChange={(e) =>
                  setData((prev) => ({ ...prev, title: e.target.value }))
                }
                value={data.title}
                required
                className="w-full  px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                placeholder="Enter title"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                rows={3}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, description: e.target.value }))
                }
                value={data.description}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                placeholder="Enter description"
              />
            </div>
            <button className="bg-purple-400 w-full px-4 py-2 text-[#fff] rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
export default ProductAddEdit;
