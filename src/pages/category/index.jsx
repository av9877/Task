import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Html from "./html";
import Swal from "sweetalert2";

const CategoryList = () => {
  const [savedData, setSavedData] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("list"));
    console.log(storedData, "stored");

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
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedList = savedData.filter((_, i) => i !== item);
        setSavedData(updatedList);
        localStorage.setItem("list", JSON.stringify(updatedList));
        Swal.fire({
          title: "Deleted!",
          text: "Item has been successfully deleted.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };
  // search
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  return (
    <>
      <Html
        handleSearch={handleSearch}
        search={search}
        handleDelete={handleDelete}
        savedData={savedData}
      />
    </>
  );
};

export default CategoryList;
