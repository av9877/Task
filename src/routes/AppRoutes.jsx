import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import ProductAddEdit from "../pages/Product/addEdit.jsx";

const MainLayout = lazy(() => import("../layout/MainLayout"));
const Home = lazy(() => import("../pages/home"));
const TaskList = lazy(() => import("../pages/taskList"));
const ViewTask = lazy(() => import("../pages/taskList/view"));
const AddEditList = lazy(() => import("../pages/taskList/addEdit"));
const CategoryList = lazy(() => import("../pages/category"));
const ViewCategory = lazy(() => import("../pages/category/view"));
const AddEditCategory = lazy(() => import("../pages/category/addEdit"));
const Performance = lazy(() => import("../pages/seo/performance.jsx"));
const Quiz = lazy(() => import("../pages/Quiz/index.jsx"));
const Product = lazy(() => import("../pages/Product/index.jsx"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/tasklist" element={<TaskList />} />
          <Route path="/tasklist/view/:index" element={<ViewTask />} />
          <Route path="/tasklist/add" element={<AddEditList />} />
          <Route path="/tasklist/edit/:id" element={<AddEditList />} />
          <Route path="/category" element={<CategoryList />} />
          <Route path="/category/view/:index" element={<ViewCategory />} />
          <Route path="/category/add" element={<AddEditCategory />} />
          <Route path="/category/edit/:id" element={<AddEditCategory />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/product" element={<Product />} />
            <Route path="/product/add" element={<ProductAddEdit />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
export default AppRoutes;
