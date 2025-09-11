import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Html from "./html";

const TaskList = () => {
  const [savedData, setSavedData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("list"));
    if (Array.isArray(storedData)) {
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

  return (
    <>
      <Html
        handleDelete={handleDelete}
        savedData={savedData}
        navigate={navigate}
      />
    </>
  );
};

export default TaskList;
