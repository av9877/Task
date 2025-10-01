import { createContext, useContext, useEffect, useState } from "react";
import CompOne from "../components/Compone";
import CartContext from "../context/ShoppingContext";

const NumberContext = createContext(null);
const ThemeContext = createContext("light");
const Home = () => {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState("light");
  const [data, setData] = useState([{ firstName: "" }]);
  const [list, setList] = useState([]);
  const [bank, setBank] = useState({
    name: "akshay",
    balance: 10000,
  });
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("debit");
  const { addItems, removeItems, cartItems } = useContext(CartContext);
  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("demo")) || [];
    setList(getData);
  }, []);
  const handleChange = (e, i) => {
    const { name, value } = e.target;
    setData((prev) => {
      const newData = [...prev];
      newData[i] = { ...newData[i], [name]: value };
      return newData;
    });
  };
  const addMore = () => {
    setData((prev) => [...prev, { firstName: "" }]);
  };
  const remove = (val) => {
    setData((prev) => prev.filter((_, i) => i !== val));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("demo")) || [];
    let updatedList;
    updatedList = [...existing, ...data];
    localStorage.setItem("demo", JSON.stringify(updatedList));
    setList(updatedList);
    setData([
      {
        firstName: "",
      },
    ]);
  };

  const handleDelete = (val) => {
    const updatedItem = list.filter((_, i) => i !== val);
    setList(updatedItem);
    localStorage.setItem("demo", JSON.stringify(updatedItem));
  };
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Carol" },
    { id: 4, name: "David" },
  ];
  const newUser = users.filter((item) => {
    const firstChar = item.name.charAt(0).toLowerCase();
    return firstChar === "a" || firstChar === "c";
  });

  const permissions = [
    { type: "read", module: "user" },
    { type: "write", module: "user" },
    { type: "read", module: "admin" },
  ];
  const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
  ];
  const newProducts = products.map((item) => {
    return { ...item, price: item.price + (item.price * 10) / 100 };
  });

  const activeUsers = [
    { id: 1, name: "Alice", active: true },
    { id: 2, name: "Bob", active: false },
  ];

  const posts = [
    { id: 1, title: "Post 1", comments: ["Nice post!", "Thanks!"] },
    { id: 2, title: "Post 2", comments: ["Interesting read"] },
  ];
  const people = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Smith" },
  ];
  const combine = people.map((res) => ({
    ...res,
    fullName: res.firstName + " " + res.lastName,
  }));

  const users2 = [
    { id: 1, name: "Alice", active: true },
    { id: 2, name: "Bob", active: false },
    { id: 3, name: "Carol", active: true },
  ];

  const newUsers2 = users2.filter((res) => res.active);
  console.log(newUsers2, "user2");
  const products2 = [
    { name: "Laptop", inStock: true },
    { name: "Phone", inStock: true },
    { name: "Monitor", inStock: false },
  ];

  // const inStock = products2.every((res) => res.inStock === true);
  const inStock = products2.some((res) => res.inStock === true);
  console.log(inStock, "instock");

  const cart = [
    { item: "Shirt", price: 20 },
    { item: "Shoes", price: 50 },
    { item: "Hat", price: 15 },
  ];

  const total = cart.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);
  console.log(total, "ll");

  const handleWithdraw = () => {
    const balance = bank.balance - withdrawAmount;
    if (withdrawAmount > bank.balance) {
      alert("insufficient Balance");
    } else {
      setBank((prev) => ({ ...prev, balance: balance }));
      setWithdrawAmount("");
    }
  };
  return (
    <div className=" gap-5">
      <div className="container mx-auto px-5">
        {/* <ThemeContext.Provider value={{ theme }}>
          <NumberContext.Provider value={{ number, setNumber }}>
            <CompOne />
          </NumberContext.Provider>
        </ThemeContext.Provider> */}
        {/* <form onSubmit={handleSubmit}>
          <div className="w-1/4 mx-auto">
            <div className="text-end">
              <button
                type="button"
                onClick={addMore}
                className="bg-black text-white px-3 py-1.5 rounded-lg text-sm"
              >
                Add More
              </button>
            </div>
            <div className="text-start">
              {data.map((item, i) => (
                <div key={i}>
                  <label className="block text-sm mb-1">First Name</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={item.firstName}
                      name="firstName"
                      className="border rounded-lg outline-none px-3 py-1.5 w-full"
                      onChange={(e) => handleChange(e, i)}
                    />
                    {i > 0 && (
                      <button
                        onClick={() => remove(i)}
                        className="bg-red-500 rounded-lg text-sm text-white px-3 py-1"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              ))}
              <div className="text-center mt-3">
                <button
                  className="bg-black text-white px-3 py-1.5 rounded-lg text-sm"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form> */}

        <ul>
          {newUser.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <ul>
          {permissions.map((item) => (
            <li key={`${item.type}-${item.module}`}>
              Permission:{item.type} {item.module}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <ul>
            {products.map((item) => (
              <li>{item.price}</li>
            ))}
          </ul>
          <ul>
            {newProducts.map((item) => (
              <li>{item.price}</li>
            ))}
          </ul>
        </div>
        <ul>
          {activeUsers.map((item) => (
            <li key={item.id}>
              {item.name} {!item.active && "Inactive"}
            </li>
          ))}
        </ul>
        <ul>
          {posts.map((item) => (
            <li key={item.id}>
              <h4>{item.title}</h4>
              {item.comments.map((cmnt, i) => (
                <p className="pl-5" key={item.id + "-" + i}>
                  {item.id + "- " + i} {cmnt}
                </p>
              ))}
            </li>
          ))}
        </ul>
        <ul>
          {combine.map((res, i) => (
            <li key={i} className="mb-2">
              <p>First Name:{res.firstName} </p>
              <p>Last Name:{res.lastName} </p>
              <p>full Name:{res.fullName} </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="container px-5 mx-auto">
        <p> name:{bank.name}</p>
        Current Balance : {bank.balance}
        <div style={{ marginTop: "10px" }}>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="debit"
              checked={paymentMethod === "debit"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Debit Card
          </label>

          <label style={{ marginLeft: "15px" }}>
            <input
              type="radio"
              name="paymentMethod"
              value="credit"
              checked={paymentMethod === "credit"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Credit Card
          </label>
        </div>
        {paymentMethod === "debit" ? "Debit Card" : "Credit Card"}
        <div className="mt-2 flex gap-2">
          <input
            type="text"
            name="withdraw"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
            placeholder="enter withdraw amount"
            className="border rounded-lg border-gray-300 outline-none px-3 py-1"
          />
          <button
            onClick={handleWithdraw}
            className="bg-gray-700 text-[#fff] rounded-lg px-3 py-1 cursor-pointer"
          >
            Withdraw
          </button>
        </div>
      </div>
      <div>
        <button
          onClick={addItems}
          className="bg-gray-700 text-[#fff] rounded-lg px-3 py-1 cursor-pointer"
        >
          Add items
        </button>
        <button
          onClick={removeItems}
          disabled={cartItems == 0}
          className="bg-gray-700 text-[#fff] rounded-lg px-3 py-1 cursor-pointer"
        >
          Remove items
        </button>
      </div>

      {/* <ul>
        {list.map((item, i) => (
          <li key={i}>
            {item.firstName}{" "}
            <button
              onClick={() => handleDelete(i)}
              className="text-red-500 cursor-pointer"
            >
              remove
            </button>
          </li>
        ))}
      </ul>
      <div className="floating-container">
        <input type="checkbox" id="toggle" className="toggle-checkbox" />

        <label htmlFor="toggle" className="floating-btn">
          <span className="plus-icon">+</span>
        </label>

        <div className="box">
          <h4>Options</h4>
          <p>
            This box appears above the floating button using only CSS in React.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
export { NumberContext, ThemeContext };
