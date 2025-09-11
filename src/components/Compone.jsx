import { useContext, useState } from "react";
import CompTwo from "./Comptwo";
import { NumberContext } from "../pages/home";

const CompOne = () => {
  const [data, setData] = useState("data 1");
  const {setNumber} = useContext(NumberContext)
  return (
    <>
      <div className="flex gap-3 items-center">
        <button
          className="bg-purple-500 rounded-lg px-3 py-1 text-[#fff] cursor-pointer"
          onClick={() => setNumber((res) => res - 1)}
        >
          -
        </button>
        <button
          className="bg-purple-500 rounded-lg px-3 py-1 text-[#fff] cursor-pointer"
          onClick={() => setNumber((res) => res + 1)}
        >
          +
        </button>
      </div>
      <CompTwo data={data} />
    </>
  );
};
export default CompOne;
