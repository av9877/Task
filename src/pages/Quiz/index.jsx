import { useEffect, useState } from "react";
import Html from "./html";
import data from "../../utils/data.json";

const Quiz = () => {
  const [question, setQuestion] = useState(data.quiz);
  const [selected, setSelected] = useState({});
  const [answer, setAnswer] = useState({});
  const [check, setCheck] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  useEffect(() => {
    const getItem = JSON.parse(localStorage.getItem("quiz"));
    console.log(getItem, "get");
    setCheck(getItem);
  }, []);
  useEffect(() => {
    localStorage.removeItem("quiz"); // Clear stored quiz on mount
    setCheck({}); // Reset check state
  }, []);

  const handleSelected = (questionId, option) => {
    setSelected((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setAnswer(selected); // Update answer state first
    localStorage.setItem("quiz", JSON.stringify(selected)); // Store selected answers
    setCheck(selected); // Update check to selected to show answers immediately
    setIsSubmitted(true);
  };

  const handleReset = () => {
    localStorage.removeItem("quiz");
    setIsSubmitted(false);
    setSelected({});
    window.location.reload();
  };

  const correctCount = question.reduce((acc, cur) => {
    return acc + (check[cur.id] === cur.answer ? 1 : 0);
  }, 0);

  return (
    <>
      <Html
        question={question}
        check={check}
        isSubmitted={isSubmitted}
        selected={selected}
        handleSubmit={handleSubmit}
        handleSelected={handleSelected}
        handleReset={handleReset}
        correctCount={correctCount}
      />
    </>
  );
};
export default Quiz;
