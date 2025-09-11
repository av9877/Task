import { createContext, useContext, useState } from "react";
import CompOne from "../components/Compone";

const NumberContext = createContext(null);
const ThemeContext = createContext("light");
const Home = () => {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState("light");
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div>
        <ThemeContext.Provider value={{ theme }}>
          <NumberContext.Provider value={{ number, setNumber }}>
            <CompOne />
          </NumberContext.Provider>
        </ThemeContext.Provider>
      </div>
    </div>
  );
};

export default Home;
export { NumberContext, ThemeContext };
