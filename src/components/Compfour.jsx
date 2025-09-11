import { useContext } from "react";
import { NumberContext, ThemeContext } from "../pages/home";

const CompFour = () => {
  const {number} = useContext(NumberContext);
    const {theme} = useContext(ThemeContext);
  return (
    <>
      comp 4
      <h4>{number}</h4>
      <h5>{theme}</h5>
    </>
  );
};
export default CompFour;
