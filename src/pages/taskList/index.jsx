import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Html from "./html";

const TaskList = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [savedData, setSavedData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    description: "",
  });
  const navigate = useNavigate();

  // form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const prevData = JSON.parse(localStorage.getItem("myData")) || [];
    let updatedData;
    if (editIndex !== null) {
      updatedData = [...prevData];
      updatedData[editIndex] = data;
    } else {
      updatedData = [...prevData, data];
    }
    localStorage.setItem("myData", JSON.stringify(updatedData));
    setSavedData(updatedData);
    setData({
      firstName: "",
      lastName: "",
      phone: "",
      description: "",
    });
    setEditIndex(null);
    setModalOpen(false);
  };

  // delete item
  const handleDelete = (item) => {
    console.log(item, "delete");
    setSavedData((prev) => prev.filter((t, i) => i !== item));
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("myData")) || [];
    setSavedData(storedData);
  }, []);
  return (
    <>
      <Html
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        handleDelete={handleDelete}
        savedData={savedData}
        setEditIndex={setEditIndex}
        setData={setData}
        data={data}
        navigate={navigate}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default TaskList;
