import React from "react";
import { useNavigate } from "react-router-dom";
const Card = ({ index,artId, image, name, category }) => {
  const BaseUrl = "http://localhost:1000";
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/view-art/${id}`);
  };
  return (
    <div key={index}>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={`${BaseUrl}/images/${image}`}
          onClick={() => handleNavigate(artId)}
          alt={name}
          className="w-full h-80 object-center hover:opacity-75 transition duration-300 cursor-pointer"
        />
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800">{name}</h2>
          <p className="mt-2 text-gray-600">{category}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
