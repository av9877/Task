import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Html from "./html";

const TaskList = () => {
  const [savedData, setSavedData] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("list"));
    if (Array.isArray(storedData)) {
      setFullData(storedData);
      setSavedData(storedData);
    } else {
      setSavedData([]);
    }
  }, []);

  // delete item
  const handleDelete = (item) => {
    console.log(item, "delete");
    const updatedList = savedData.filter((_, i) => i !== item);
    setSavedData(updatedList);
    localStorage.setItem("list", JSON.stringify(updatedList));
  };
  // search
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    const filteredItem = fullData.filter((item) =>
      item.firstName.toLowerCase().includes(value)
    );
    setSavedData(filteredItem);
  };
  return (
    <>
      <Html
        handleSearch={handleSearch}
        search={search}
        handleDelete={handleDelete}
        savedData={savedData}
        navigate={navigate}
      />
    </>
  );
};

export default TaskList;
