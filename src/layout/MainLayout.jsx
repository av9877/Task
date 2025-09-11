import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="p-5">
        <Outlet />
      </main>
    </>
  );
};
export default MainLayout;
