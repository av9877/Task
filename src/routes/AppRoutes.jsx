import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const MainLayout = lazy(() => import("../layout/MainLayout"));
const Home = lazy(() => import("../pages/home"));
const TaskList = lazy(() => import("../pages/taskList"));
const ViewTask = lazy(() => import("../pages/taskList/view"));
const AddEditList = lazy(() => import("../pages/taskList/addEdit"));
const Performance = lazy(() => import("../pages/seo/performance.jsx"));
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
           <Route path="/performance" element={<Performance />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
export default AppRoutes;
