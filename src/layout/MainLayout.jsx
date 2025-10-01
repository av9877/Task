import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { CartProvider } from "../context/ShoppingContext";

const MainLayout = () => {
  return (
    <>
      <CartProvider>
        <Header />
        <main className="p-5">
          <Outlet />
        </main>
      </CartProvider>
    </>
  );
};
export default MainLayout;
