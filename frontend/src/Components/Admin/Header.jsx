import React from "react";

const Header = () => {
  return (
    <>
      <header className="bg-white shadow p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-700">Dashboard</h1>
        <div>
          <button className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Logout
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
