import { useEffect, useReducer, useRef, useState } from "react";

const About = () => {
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState({ name: "Alice", age: 25 });
  const birthday = () => {
    setPerson((prev) => ({ ...prev, age: prev.age + 1 }));
  };

  const obj = { name: "Alice", age: 25 };
  console.log({ ...obj, name: (obj.name = "av") });

  const initialState = { count: 0, isOn: false };
  const reducer = (state, action) => {
    switch (action.t) {
      case "increment":
        return { ...state, count: state.count + 1 };
      case "decrement":
        return { ...state, count: state.count - 1 };
      case "toggle":
        return { ...state, isOn: !state.isOn };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const inputRef = useRef(null);
  const prevCountRef = useRef(0);
  const handleFocus = () => {
    // Access the actual input DOM node and focus it
    inputRef.current.focus();
  };

  useEffect(() => {
    // Update the ref after every render with the current count
    prevCountRef.current = count;
  }, [count]);
  console.log(prevCountRef.current, "red");

  // const [seconds, setSeconds] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSeconds((s) => s + 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval); // Cleanup interval on unmount or before rerun
  //   };
  // }, []);

  return (
    <>
      {/* useState hook */}
      <h2 className="text-xl text-center font-semibold mb-4">useState hook</h2>
      <h4 className="text-center mb-2 font-semibold">
        count is: <span className="text-purple-500">{count}</span>
      </h4>
      <div className="flex items-center justify-center gap-3">
        <button
          disabled={count === 0}
          onClick={() => setCount(count - 1)}
          className="bg-purple-500 text-[#fff] disabled:bg-gray-400 rounded-lg py-1 px-3 font-semibold"
        >
          -
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-purple-500 text-[#fff] rounded-lg py-1 px-3 font-semibold"
        >
          +
        </button>
      </div>
      <div className="mt-5 text-center">
        <p>Name: {person.name}</p>
        <p>Age: {person.age}</p>
        <button
          className="bg-purple-500 text-[#fff] rounded-lg py-1 px-3 font-semibold mt-3"
          onClick={birthday}
        >
          Have a Birthday
        </button>
      </div>

      <div className="text-center">
        <h4>{state.count}</h4>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => dispatch({ t: "decrement" })}
            className="bg-purple-500 text-[#fff] disabled:bg-gray-400 rounded-lg py-1 px-3 font-semibold"
          >
            -
          </button>
          <button
            onClick={() => dispatch({ t: "increment" })}
            className="bg-purple-500 text-[#fff] rounded-lg py-1 px-3 font-semibold"
          >
            +
          </button>
        </div>
        <div className="text-center mt-5">
          <h4>{state.isOn ? "hide" : "show"}</h4>
          <button
            className="bg-purple-500 text-[#fff] rounded-lg py-1 px-3 font-semibold"
            onClick={() => dispatch({ t: "toggle" })}
          >
            toggle button
          </button>
        </div>

        <div className="text-center">
          <input ref={inputRef} placeholder="Click button to focus me" />
          <button
            className="bg-purple-500 text-[#fff] rounded-lg py-1 px-3 font-semibold"
            onClick={handleFocus}
          >
            Focus Input
          </button>

          <h1>Current Count: {count}</h1>
          <h2>Previous Count: {prevCountRef.current}</h2>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      </div>

      {/* <div>Seconds: {seconds}</div> */}
    </>
  );
};
export default About;
