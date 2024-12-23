import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SideBar = ({ name }) => {
  const [sideBarActive, setsideBarActive] = useState({
    dashboard: false,
    allArt: false,
    uploadArt: false,
    category: false,
  });
  useEffect(() => {
    console.log(name);

    if (name === "dashboard") {
      setsideBarActive({ ...sideBarActive, dashboard: true });
    } else if (name === "allArt") {
      setsideBarActive({ ...sideBarActive, allArt: true });
    } else if (name === "upload") {
      setsideBarActive({
        ...sideBarActive,
        uploadArt: true,
      });
    } else if (name === "category") {
      setsideBarActive({
        ...sideBarActive,
        category: true,
      });
    }
  }, []);
  return (
    <>
      <aside className="w-64 bg-blue-600 text-white flex flex-col">
        <div className="p-4 text-center text-2xl font-bold border-b border-blue-500">
          Admin Panel
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link
            to={"/admin/panel"}
            className={`block py-2 px-4 rounded-lg ${
              sideBarActive.dashboard ? "text-slate-900" : "text-white"
            } hover:bg-blue-500`}
          >
            Dashboard
          </Link>
          <Link
            to={"/admin/panel"}
            className={`block py-2 px-4 rounded-lg  ${
              sideBarActive.allArt ? "text-slate-900" : "text-white"
            } hover:bg-blue-500`}
          >
            All Art Works
          </Link>
          <Link
            to={"/admin/upload-art"}
            className={`block py-2 px-4 rounded-lg  ${
              sideBarActive.uploadArt ? "text-slate-900" : "text-white"
            } hover:bg-blue-500`}
          >
            Upload Art Work
          </Link>
          <Link
            to={"/admin/category"}
            className={`block py-2 px-4 rounded-lg  ${
              sideBarActive.category ? "text-slate-900" : "text-white"
            } hover:bg-blue-500`}
          >
            Category
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default SideBar;
