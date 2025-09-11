import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const MainLayout = lazy(() => import("../layout/MainLayout"));
const Home = lazy(() => import("../pages/home"));
const TaskList = lazy(() => import("../pages/taskList"));
const About = lazy(() => import("../pages/about"));
const ViewTask = lazy(() => import("../pages/viewTask"));
const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tasklist" element={<TaskList />} />
          <Route path="/view/:index" element={<ViewTask />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
export default AppRoutes;
