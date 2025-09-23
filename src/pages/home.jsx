import { createContext, useContext, useState } from "react";
import CompOne from "../components/Compone";

const NumberContext = createContext(null);
const ThemeContext = createContext("light");
const Home = () => {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState("light");
  return (
    <div className=" gap-5">
      <div>
        <ThemeContext.Provider value={{ theme }}>
          <NumberContext.Provider value={{ number, setNumber }}>
            <CompOne />
          </NumberContext.Provider>
        </ThemeContext.Provider>
      </div>
      <div
      className="border rounded-lg p-3"
        style={{
          maxWidth: 400,
          margin: "0 auto",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h3 style={{ fontSize: 22, fontWeight: 600 }} className="mb-3">
          Quick Rate Lookup
        </h3>

        <div
          className="mb-4"
          style={{
            position: "relative",
            border: "1px solid gray",
            borderRadius: "8px",
          }}
        >
          <span
            className="bg-white px-1 text-xs"
            style={{ position: "absolute", left: "10px", top: "-10px" }}
          >
            {" "}
            Origin (City, ST / ZIP)*
          </span>
          <input
            type="text"
            className="px-3"
            value={"Mobile, AL"} // {origin}
            // onChange={(e) => setOrigin(e.target.value)}
            placeholder="Mobile, AL"
            style={{
              width: "100%",
              padding: 8,
              marginTop: 6,
              border: "none",
              outline: "none",
            }}
          />
        </div>

        <div
          className="mb-4"
          style={{
            position: "relative",
            border: "1px solid gray",
            borderRadius: "8px",
          }}
        >
          <span
            className="bg-white px-1 text-xs"
            style={{ position: "absolute", left: "10px", top: "-10px" }}
          >
            {" "}
            Destination (City, ST / ZIP)*
          </span>
          <input
            type="text"
            value={"Memphis, TN"} // {destination}
            // onChange={(e) => setDestination(e.target.value)}
            placeholder="Memphis, TN"
            className="px-3"
            style={{
              width: "100%",
              padding: 8,
              marginTop: 6,
              border: "none",
              outline: "none",
            }}
          />
        </div>

        <div
          className="mb-4"
          style={{
            position: "relative",
            border: "1px solid gray",
            borderRadius: "8px",
          }}
        >
          <span
            className="bg-white px-1 text-xs"
            style={{ position: "absolute", left: "10px", top: "-10px" }}
          >
            {" "}
            Equipment Type*
          </span>
          <select
            value={"Van"} // {equipment}
            // onChange={(e) => setEquipment(e.target.value)}
            style={{
              width: "100%",
              padding: 10,
              marginTop: 6,
              border: "none",
              outline: "none",
            }}
          >
            <option value="Van">Van</option>
            <option value="Reefer">Reefer</option>
            <option value="Flatbed">Flatbed</option>
          </select>
        </div>

      <div className="text-center">
          <button
        className="btn btn-dark py-1 px-3"
          // onClick={fetchRate}
          // disabled={loading}
          style={{ padding: "10px 20px" }}
        >
          {/* {loading ? "Loading..." : "Get Rate"} */}
          Get Rate
        </button>
      </div>

        {/* {error && (
    <div style={{ marginTop: 12, color: "red" }}>
      Error: {error}
    </div>
  )} */}

        {/* {rateData && ( */}
        <div
          style={{
            marginTop: 20,
            border: "1px solid #ccc",
            padding: 12,
            borderRadius: 4,
          }}
        >
          <div style={{ fontWeight: "bold", fontSize: 18 }}>
            $2,350 {/* ${rateData.spot} */}
            <span style={{ fontWeight: "normal", fontSize: 14 }}>
              (2.35/mi) {/* ({rateData.ratePerMile}/mi) */}
            </span>
          </div>
          <div style={{ fontSize: 12, color: "#555" }}>
            1,000 mi | 2d average{" "}
            {/* {rateData.miles} mi | {rateData.days}d average */}
          </div>
          <div style={{ marginTop: 8, fontSize: 12 }}>
            Range: $2,100 - $2,600{" "}
            {/* ${rateData.rangeMin} - ${rateData.rangeMax} */}
            (2.10 - 2.60/mi){" "}
            {/* (${rateData.rangeMinRate} - ${rateData.rangeMaxRate}/mi) */}
          </div>
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default Home;
export { NumberContext, ThemeContext };
