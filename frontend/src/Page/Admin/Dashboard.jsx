import React, { useEffect, useState } from "react";
import Header from "../../Components/Admin/Header";
import SideBar from "../../Components/Admin/SideBar";
import axios from "axios";
import toast from "react-hot-toast";
import LoadingSpinner from "../../Components/LoadingSPinner";
import { BaseUrll } from "../../Constants";

const Dashboard = () => {
  let size = ["A4", "A3"];
  const BaseUrl = "http://localhost:1000";
  const [loader, setloader] = useState(true);
  const [artWorks, setartWorks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteModal, setdeleteModal] = useState(false);
  const [deleteArt, setdeleteArt] = useState("");
  const [editArt, seteditArt] = useState({
    id: "",
    name: "",
    price: "",
    category: "",
    image: "",
    size: "",
  });
  const [categories, setcategories] = useState([]);
  const [imageEdited, setimageEdited] = useState(false);
  const openModal = async (id) => {
    setIsModalOpen(true);
    setloader(true);
    const { data } = await axios.get("http://localhost:1000/admin/editArt", {
      params: { id },
    });
    const category = await axios.get("http://localhost:1000/admin/categories");
    if (data?.success) {
      seteditArt({
        ...editArt,
        id: data?.art?._id,
        name: data?.art?.name,
        price: data?.art?.cost,
        category: data?.art?.category,
        image: data?.art?.image,
        size: data?.art?.size,
      });
      setcategories(category?.data?.categories);
      setloader(false);
    }
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setdeleteModal(false);
  };
  const confirmDelete = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post(
        `${BaseUrll}/admin/deleteArtWork`,
        {},
        { params: { id: deleteArt } }
      );
      if (data?.success) {
        toast.success(data?.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getArtWorks();
  }, [isModalOpen, deleteModal]);
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
    setdeleteModal(true);
    setdeleteArt(id);
  };
  const handleClick = (e, id) => {
    if (id === "size") {
      seteditArt({ ...editArt, size: e.target.value });
    } else if (id === "category") {
      seteditArt({ ...editArt, category: e.target.value });
    } else if (id === "image") {
      seteditArt({ ...editArt, image: e.target.files[0] });
      setimageEdited(true);
    }
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let fileData = new FormData();
      fileData.append("edited-image", editArt.image);
      const { data } = await axios.post(
        "http://localhost:1000/admin/edit-art",
        fileData,
        {
          params: { editedArt: editArt },
        },

        { headers: { "Content-Type": "multipart/form-data" } }
      );
      if (data?.success) {
        toast.success(data?.message);
        seteditArt(null);
        setIsModalOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
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
                      <h2 className="text-md font-bold text-gray-800 mt-4">
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
                          onClick={() => handleDelete(card?._id)}
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
                {deleteModal && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
                      <h2 className="text-xl font-bold text-gray-800 mb-4">
                        Confirm Deletion
                      </h2>
                      <p className="text-gray-600 mb-6">
                        Are you sure you want to delete this item? This action
                        cannot be undone.
                      </p>
                      <div className="flex justify-end space-x-4">
                        <button
                          onClick={closeModal}
                          className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={confirmDelete}
                          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {isModalOpen && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="flex items-center justify-center bg-gray-100">
                      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                        <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                          EDIT ART
                        </h1>
                        <form className="space-y-6">
                          {/* Text Field */}
                          <div>
                            <input
                              type="text"
                              id="text"
                              name="text"
                              value={editArt?.name}
                              onChange={(e) =>
                                seteditArt({ ...editArt, name: e.target.value })
                              }
                              placeholder="Enter text"
                              className="mt-1 block w-full p-2 border rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                              required
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              id="text"
                              name="text"
                              value={editArt?.price}
                              onChange={(e) =>
                                seteditArt({
                                  ...editArt,
                                  price: e.target.value,
                                })
                              }
                              placeholder="Enter text"
                              className="mt-1 block w-full p-2 border rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                              required
                            />
                          </div>
                          {/* Image Upload Field */}
                          <div>
                            <input
                              type="file"
                              id="image"
                              name="image"
                              accept="image/*"
                              onChange={(e) => handleClick(e, "image")}
                              className="mt-1 block w-full text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border file:border-gray-300 file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
                            />
                            {imageEdited ? (
                              <>
                                <p className="mt-2 text-sm text-gray-600">
                                  Edited file:
                                </p>
                                <div className="flex w-full  justify-center">
                                  {" "}
                                  <img
                                    src={URL.createObjectURL(editArt?.image)}
                                    alt=""
                                    className="w-20 "
                                  />
                                </div>
                              </>
                            ) : (
                              <>
                                <p className="mt-2 text-sm text-gray-600">
                                  Selected file:
                                </p>
                                <div className="flex w-full  justify-center">
                                  {" "}
                                  <img
                                    src={`${BaseUrl}/images/${editArt?.image}`}
                                    alt=""
                                    className="w-20 "
                                  />
                                </div>
                              </>
                            )}
                          </div>
                          {/* Select Box */}
                          <div>
                            <select
                              id="category"
                              name="category"
                              // value={formData.category}
                              onChange={(e) => handleClick(e, "category")}
                              className="mt-1 block w-full p-2 border rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                              required
                            >
                              <option value={editArt?.category}>
                                {editArt?.category}
                              </option>
                              {categories.map((cat, index) => {
                                if (cat?.category === editArt?.category) {
                                  return <></>;
                                } else {
                                  return (
                                    <>
                                      <option
                                        key={index}
                                        value={editArt?.category}
                                      >
                                        {cat?.category}
                                      </option>
                                    </>
                                  );
                                }
                              })}
                            </select>
                          </div>
                          <div>
                            <select
                              id="category"
                              name="category"
                              // value={formData.category}
                              onChange={(e) => handleClick(e, "size")}
                              className="mt-1 block w-full p-2 border rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                              required
                            >
                              <option value={editArt?.size}>
                                {editArt?.size}
                              </option>
                              {size.map((item, index) => {
                                if (item === editArt?.size) {
                                  return <></>;
                                } else {
                                  return (
                                    <>
                                      <option key={index} value={item}>
                                        {item}
                                      </option>
                                    </>
                                  );
                                }
                              })}
                            </select>
                          </div>
                          {/* Submit Button */}
                          <div className="text-center">
                            <button
                              type="submit"
                              onClick={handleSubmit}
                              className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
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
