import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/ShoppingContext";

const Header = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <header className={`bg-white shadow-md sticky top-0 z-50`}>
      <div className="flex justify-center items-center gap-3 pe-5">
        <nav className="mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-center items-center">
          <div className="space-x-4">
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 border-r pe-5"
            >
              Home
            </Link>
            {/* <Link
              to="/about"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 border-r pe-5"
            >
              About
            </Link> */}
            {/* <Link
              to="/tasklist"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 border-r pe-5"
            >
              Task
            </Link> */}
            <Link
              to="/category"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 border-r pe-5"
            >
              Category
            </Link>
            <Link
              to="/quiz"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 border-r pe-5"
            >
              Quiz
            </Link>
               <Link
              to="/product"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              Products
            </Link>
          </div>
        </nav>
        <p>cart:{cartItems.length}</p>
      </div>
    </header>
  );
};

export default Header;
