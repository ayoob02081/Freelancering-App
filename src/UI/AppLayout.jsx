import { Outlet } from "react-router-dom";
import Header from "../pages/Header";
import Sidebar from "../pages/Sidebar";

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
      <Header />
      <Sidebar />
      <div className="bg-secondary-100 p-8 overflow-y-auto">
        <div className="mx-auto max-w-screen-lg flex flex-col gap-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
