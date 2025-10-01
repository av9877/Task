import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Html from "./html";
import Swal from "sweetalert2";
import Pagination from "../../components/pagination";

const CategoryList = () => {
  const [savedData, setSavedData] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

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

  useEffect(() => {
    const searchTimer = setTimeout(() => {
      const filteredItem = fullData.filter((res) =>
        res.firstName.toLowerCase().includes(search.toLowerCase())
      );
      setSavedData(filteredItem);
      setCurrentPage(1);
    }, 300);

    return () => clearTimeout(searchTimer);
  }, [search, fullData]);
  // pagination
  const itemsPerPage = 8;
  const totalPages = Math.ceil(savedData.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentItems = savedData.slice(startIdx, startIdx + itemsPerPage);
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
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

  const sortedData = (val) => {
    if (val == "asc") {
      const newData = [...savedData].sort((a, b) =>
        a.firstName.localeCompare(b.firstName)
      );
      setSavedData(newData);
    } else {
      const newData = [...savedData].sort((a, b) =>
        b.firstName.localeCompare(a.firstName)
      );
      setSavedData(newData);
    }
  };

  return (
    <>
      <Html
        sortedData={sortedData}
        handleSearch={handleSearch}
        search={search}
        handleDelete={handleDelete}
        setCurrentPage={setCurrentPage}
        totalData={savedData}
        savedData={currentItems}
        goToPage={goToPage}
        totalPages={totalPages}
        startIdx={startIdx}
        currentPage={currentPage}
      />
      
    </>
  );
};

export default CategoryList;
