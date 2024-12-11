import React, { useEffect, useState } from "react";
import SideBar from "../../Components/Admin/SideBar";
import Header from "../../Components/Admin/Header";
import LoadingSpinner from "../../Components/LoadingSPinner";
import { BaseUrll } from "../../Constants";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  const [loader, setloader] = useState(true);
  const [categories, setcategories] = useState([]);
  const [isEditModal, setisEditModal] = useState(false);
  const [id, setid] = useState("");
  const [category, setcategory] = useState("");
  const [isDeleteModal, setisDeleteModal] = useState(false);
  const [isAddModal, setisAddModal] = useState(false);
  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = async () => {
    try {
      const { data } = await axios.get(`${BaseUrll}/admin/categories`);
      setcategories(data?.categories);
      setloader(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleEditModal = async (e, _id, name) => {
    try {
      console.log(name);

      e.preventDefault();
      setloader(true);
      setid(_id);
      const { data } = await axios.get(`${BaseUrll}/admin/category`, {
        params: { _id },
      });
      if (data?.success) {
        setcategory(data?.category?.category);
        if (name === "edit") {
          setisEditModal(true);
          setloader(false);
        } else {
          setisDeleteModal(true);
          setloader(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = async (e) => {
    try {
      e.preventDefault();
      console.log("OK");

      const { data } = await axios.post(
        `${BaseUrll}/admin/update-category`,
        {},
        { params: { id, category } }
      );
      if (data?.success) {
        toast.success(data?.msg);
        navigate("/admin/panel");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const closeModal = () => {
    isDeleteModal(false);
    isEditModal(false);
  };
  const confirmDelete = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios.post(
        `${BaseUrll}/admin/delete-category`,
        {},
        { params: { id } }
      );
      if (data?.success) {
        toast.success(data?.msg);
        navigate("/admin/panel");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const addCate = async (e) => {
    try {
      e.preventDefault();
      console.log(category);

      const { data } = await axios.post(
        `${BaseUrll}/admin/add-category`,
        {},
        { params: { category } }
      );
      if (data?.success) {
        toast.success(data?.msg);
        navigate("/admin/panel");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        <SideBar name={"category"} />
        <div className="flex-1 flex flex-col">
          {/* Top Bar */}
          <Header />
          {loader ? (
            <>
              <LoadingSpinner />
            </>
          ) : (
            <>
              <main className="flex-1 p-6 min-h-[60vh] bg-slate-700">
                <div className="flex justify-end pr-44 ">
                  <button
                    onClick={() => setisAddModal(true)}
                    className=" bg-green-800 text-white rounded px-5 "
                  >
                    ADD CATEGORY
                  </button>
                </div>
                <div className="h-full flex items-center justify-center">
                  <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                      Category Section
                    </h1>
                    <div className="overflow-x-auto">
                      <table className="min-w-full border-collapse border border-gray-300">
                        <thead className="bg-gray-200">
                          <tr>
                            <th className="border border-gray-300 px-4 py-2 text-left text-gray-800 font-medium">
                              Category Name
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-center text-gray-800 font-medium">
                              Edit
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-center text-gray-800 font-medium">
                              Delete
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {categories.map((category, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                              <td className="border border-gray-300 px-4 py-2">
                                {category?.category}
                              </td>

                              <td className="border border-gray-300 px-4 py-2 text-center">
                                <button
                                  onClick={(e) =>
                                    handleEditModal(e, category._id, "edit")
                                  }
                                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                >
                                  Edit
                                </button>
                              </td>
                              <td className="border border-gray-300 px-4 py-2 text-center">
                                <button
                                  onClick={(e) =>
                                    handleEditModal(e, category._id, "delete")
                                  }
                                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </main>
              <div className="">
                {isEditModal && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="flex items-center justify-center bg-gray-100">
                      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                        <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                          EDIT CATEGORY
                        </h1>
                        <form className="space-y-6">
                          {/* Text Field */}
                          <div>
                            <input
                              type="text"
                              id="text"
                              name="text"
                              value={category}
                              onChange={(e) => setcategory(e.target.value)}
                              className="mt-1 block w-full p-2 border rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                              required
                            />
                          </div>
                          {/* Submit Button */}
                          <div className="text-center">
                            <button
                              type="submit"
                              onClick={handleEdit}
                              className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              Update
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
                {isDeleteModal && (
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
                {isAddModal && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="flex items-center justify-center bg-gray-100">
                      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                        <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                          ADD CATEGORY
                        </h1>
                        <form className="space-y-6">
                          {/* Text Field */}
                          <div>
                            <input
                              type="text"
                              id="text"
                              name="text"
                              value={category}
                              onChange={(e) => setcategory(e.target.value)}
                              className="mt-1 block w-full p-2 border rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                              required
                            />
                          </div>
                          {/* Submit Button */}
                          <div className="text-center">
                            <button
                              type="submit"
                              onClick={addCate}
                              className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              Add
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
    </>
  );
};

export default Category;
