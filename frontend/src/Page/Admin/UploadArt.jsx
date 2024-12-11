import React, { useEffect, useState } from "react";
import SideBar from "../../Components/Admin/SideBar";
import Header from "../../Components/Admin/Header";
import LoadingSpinner from "../../Components/LoadingSPinner";
import { BaseUrll } from "../../Constants";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UploadArt = () => {
  let size = ["A4", "A3"];
  const navigate = useNavigate();
  const [loader, setloader] = useState(true);
  const [categories, setcategories] = useState([]);
  const [imageUploaded, setimageUploaded] = useState(false);
  const [artData, setartData] = useState({
    name: "",
    size: "",
    price: "",
    image: "",
    category: "",
  });
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
  const handleClick = (e, id) => {
    if (id === "size") {
      setartData({ ...artData, size: e.target.value });
    } else if (id === "category") {
      setartData({ ...artData, category: e.target.value });
    } else if (id === "image") {
      setartData({ ...artData, image: e.target.files[0] });
      setimageUploaded(true);
    }
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let fileData = new FormData();
      fileData.append("image", artData.image);
      const { data } = await axios.post(
        "http://localhost:1000/admin/add-art",
        fileData,
        {
          params: { artData },
        },

        { headers: { "Content-Type": "multipart/form-data" } }
      );
      if (data?.success) {
        toast.success(data?.message);
        navigate("/admin/panel");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        <SideBar name={"upload"} />
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
                <div className="h-full flex items-center justify-center">
                  <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                      Upload Art
                    </h2>
                    <form className="space-y-6">
                      {/* Text Field */}
                      <div>
                        <label
                          htmlFor="textInput"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="textInput"
                          name="textInput"
                          value={artData.name}
                          onChange={(e) =>
                            setartData({ ...artData, name: e.target.value })
                          }
                          placeholder="Enter text"
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                      </div>
                      <div className="w-full gap-4 flex">
                        <div className="w-1/3">
                          <label
                            htmlFor="textInput"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Price
                          </label>
                          <input
                            type="text"
                            id="textInput"
                            name="textInput"
                            value={artData.price}
                            onChange={(e) =>
                              setartData({ ...artData, price: e.target.value })
                            }
                            placeholder="Enter text"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                          />
                        </div>
                        <div className="w-1/3">
                          <label
                            htmlFor="textInput"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Category
                          </label>
                          <select
                            id="category"
                            name="category"
                            onChange={(e) => handleClick(e, "category")}
                            className="mt-1 block w-full p-2 border rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                          >
                            <option value="0">Select</option>
                            {categories.map((cat, index) => {
                              return (
                                <>
                                  <option key={index} value={cat?.category}>
                                    {cat?.category}
                                  </option>
                                </>
                              );
                            })}
                          </select>
                        </div>
                        <div className="w-1/3">
                          <label
                            htmlFor="textInput"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Size
                          </label>
                          <select
                            id="category"
                            name="category"
                            onChange={(e) => handleClick(e, "size")}
                            className="mt-1 block w-full p-2 border rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                          >
                            <option value="0">Select</option>
                            {size.map((item, index) => {
                              return (
                                <>
                                  <option key={index} value={item}>
                                    {item}
                                  </option>
                                </>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                      {/* Image Upload Field */}
                      <div>
                        <label
                          htmlFor="imageUpload"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Upload Image
                        </label>
                        <input
                          type="file"
                          id="imageUpload"
                          name="imageUpload"
                          accept="image/*"
                          onChange={(e) => handleClick(e, "image")}
                          className="mt-1 block w-full text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border file:border-gray-300 file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
                        />
                        {imageUploaded && (
                          <>
                            <p className="mt-2 text-sm text-gray-600">
                              Selected file:
                            </p>
                            <div className="flex w-full  justify-center">
                              {" "}
                              <img
                                src={URL.createObjectURL(artData?.image)}
                                alt=""
                                className="w-20 object-center h-20"
                              />
                            </div>
                          </>
                        )}
                      </div>
                      {/* Submit Button */}
                      <div className="text-center">
                        <button
                          type="submit"
                          onClick={handleSubmit}
                          className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </main>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default UploadArt;
