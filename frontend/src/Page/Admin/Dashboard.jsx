import React, { useEffect, useState } from "react";
import Header from "../../Components/Admin/Header";
import SideBar from "../../Components/Admin/SideBar";
import axios from "axios";
import toast from "react-hot-toast";
import LoadingSpinner from "../../Components/LoadingSPinner";

const Dashboard = () => {
  const BaseUrl = "http://localhost:1000";
  const [loader, setloader] = useState(true);
  const [artWorks, setartWorks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editArt, seteditArt] = useState({});
  const openModal = async (id) => {
    setIsModalOpen(true);
    setloader(true);
    const { data } = await axios.get("http://localhost:1000/admin/editArt", {
      params: { id },
    });
    console.log(data?.art);
    
    seteditArt(data?.art);
    setloader(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    getArtWorks();
  }, []);
  const getArtWorks = async () => {
    const { data } = await axios.get("http://localhost:1000/admin/getArtWorks");
    if (data?.success) {
      setartWorks(data?.artWorks);
      setloader(false);
    } else {
      toast.error("Something went wrong....");
    }
  };

  const handleDelete = (id) => {
    alert(`Delete card with ID: ${id}`);
  };

  return (
    <div>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <SideBar name={"dashboard"} />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top Bar */}
          <Header />
          {/* Content */}
          {loader ? (
            <>
              <LoadingSpinner />
            </>
          ) : (
            <>
              {" "}
              <main className="flex-1 p-6">
                {/* Image Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {artWorks.map((card, id) => (
                    <div
                      key={id}
                      className="bg-white shadow-lg rounded-lg p-4 flex flex-col"
                    >
                      <img
                        src={`${BaseUrl}/images/${card?.image}`}
                        alt={"IMG"}
                        className="w-full h-40 object-center rounded-md"
                      />
                      <h2 className="text-lg font-bold text-gray-800 mt-4">
                        {card?.name}
                      </h2>
                      <div className="mt-4 flex justify-between">
                        <button
                          onClick={() => openModal(card?._id)}
                          className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(card.id)}
                          className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </main>
              <div className="">
                {isModalOpen && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">
                      <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Edit 
                      </h2>
                      <form>
                        <div className="mb-4">
                          <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Title
                          </label>
                          <input
                            type="text"
                            id="title"
                            // defaultValue={currentCard?.title}
                            className="mt-1 block w-full p-2 border rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div className="flex justify-end space-x-4">
                          <button
                            onClick={closeModal}
                            type="button"
                            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={closeModal}
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                          >
                            Save
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
