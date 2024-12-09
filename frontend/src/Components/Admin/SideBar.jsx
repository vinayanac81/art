import React, { useEffect, useState } from "react";

const SideBar = ({ name }) => {
  const [sideBarActive, setsideBarActive] = useState({
    dashboard: false,
    allArt: false,
    uploadArt: false,
  });
  useEffect(() => {
    if (name === "dashboard") {
      setsideBarActive({ ...sideBarActive, dashboard: true });
    } else if ((name = "allArt")) {
      setsideBarActive({ ...sideBarActive, allArt: true });
    } else {
      setsideBarActive({ ...sideBarActive, uploadArt: true });
    }
  }, []);
  return (
    <>
      <aside className="w-64 bg-blue-600 text-white flex flex-col">
        <div className="p-4 text-center text-2xl font-bold border-b border-blue-500">
          Admin Panel
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a
            href="#"
            className={`block py-2 px-4 rounded-lg ${
              sideBarActive.dashboard ? "text-slate-900" : "text-white"
            } hover:bg-blue-500`}
          >
            Dashboard
          </a>
          <a
            href="#"
            className={`block py-2 px-4 rounded-lg  ${
              sideBarActive.allArt ? "text-slate-900" : "text-white"
            } hover:bg-blue-500`}
          >
            All Art Works
          </a>
          <a
            href="#"
            className={`block py-2 px-4 rounded-lg  ${
              sideBarActive.uploadArt ? "text-slate-900" : "text-white"
            } hover:bg-blue-500`}
          >
            Upload Art Work
          </a>
          <a href="#" className="block py-2 px-4 rounded-lg hover:bg-blue-500">
            Settings
          </a>
        </nav>
      </aside>
    </>
  );
};

export default SideBar;
