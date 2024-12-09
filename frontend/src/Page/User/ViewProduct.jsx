import React, { useEffect, useState } from "react";
import Header from "../../Components/User/Header";
import Footer from "../../Components/User/Footer";
import Axios from "axios";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../Components/LoadingSPinner";
const ViewProduct = () => {
  const { id } = useParams();
  const [artDetails, setartDetails] = useState({});
  const [loader, setloader] = useState(true);
  const BaseUrl = "http://localhost:1000";
  useEffect(() => {
    getArtData();
  }, []);
  const getArtData = async () => {
    try {
      const { data } = await Axios.get("http://localhost:1000/getArtData", {
        params: {
          id,
        },
      });
      setloader(false);
      setartDetails(data?.artData);
    } catch (error) {
      console.log(error);
    }
  };
  const product = {
    id: 1,
    title: "Funny Bob Caricature",
    description:
      "A hilarious take on Bob's daily adventures. This caricature is perfect for bringing a smile to anyone's face.",
    image: "https://via.placeholder.com/400",
    price: "$25.00",
    details:
      "This high-quality caricature is printed on durable paper and features vibrant colors. Ideal for gifting or home decoration.",
  };
  return (
    <div>
      <div className="">
        <Header />
      </div>
      <div className="">
        {loader ? (
          <>
            <LoadingSpinner />
          </>
        ) : (
          <>
            <div className="bg-gray-100 min-h-screen py-10">
              <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {/* Product Image */}
                  <div className="flex justify-center">
                    <img
                      src={`${BaseUrl}/images/${artDetails?.image}`}
                      alt={artDetails?.name}
                      className="rounded-lg shadow-lg w-full max-w-md object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-col justify-center">
                    <h1 className="text-4xl font-bold text-gray-800">
                      {artDetails?.name}
                    </h1>
                    <p className="text-gray-600 mt-4">{product.description}</p>
                    <p className="text-2xl font-semibold text-gray-900 mt-6">
                      {artDetails?.cost}
                    </p>

                    <div className="mt-8">
                      <button className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                        BUY NOW
                      </button>
                    </div>

                    <div className="mt-10">
                      <h2 className="text-xl font-semibold text-gray-800">
                        Details:
                      </h2>
                      <p className="text-gray-600 mt-2">{product.details}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default ViewProduct;
