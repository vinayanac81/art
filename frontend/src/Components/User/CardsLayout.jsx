import React, { useEffect, useState } from "react";
import Card from "./Card";
import Axios from "axios";
import LoadingSpinner from "../LoadingSPinner";
const CardsLayout = () => {
  const [loader, setloader] = useState(true);
  const cards = [
    {
      image: "https://via.placeholder.com/400x300?text=Image+1",
      title: "Vibrant Colors",
      description: "Explore a wide range of vibrant and long-lasting colors.",
    },
    {
      image: "https://via.placeholder.com/400x300?text=Image+2",
      title: "Smooth Finish",
      description: "Achieve a smooth and professional finish with ease.",
    },
    {
      image: "https://via.placeholder.com/400x300?text=Image+3",
      title: "Durable Quality",
      description: "Built to last, ensuring reliable performance over time.",
    },
    {
      image: "https://via.placeholder.com/400x300?text=Image+4",
      title: "Eco-Friendly",
      description: "Made with environmentally friendly materials.",
    },
    {
      image: "https://via.placeholder.com/400x300?text=Image+1",
      title: "Vibrant Colors",
      description: "Explore a wide range of vibrant and long-lasting colors.",
    },
    {
      image: "https://via.placeholder.com/400x300?text=Image+2",
      title: "Smooth Finish",
      description: "Achieve a smooth and professional finish with ease.",
    },
    {
      image: "https://via.placeholder.com/400x300?text=Image+3",
      title: "Durable Quality",
      description: "Built to last, ensuring reliable performance over time.",
    },
    {
      image: "https://via.placeholder.com/400x300?text=Image+4",
      title: "Eco-Friendly",
      description: "Made with environmentally friendly materials.",
    },
  ];
  // const { category } = useSelector((state) => state.filter);
  const BaseUrl = "http://localhost:1000";
  const [allArtWorks, setallArtWorks] = useState([]);
  useEffect(() => {
    getAllArtWorks();
  }, []);
  const getAllArtWorks = async () => {
    const { data } = await Axios.get("http://localhost:1000/getAllArtWorks");
    setloader(false);
    setallArtWorks(data?.allArts);
    console.log(data);
  };
  return (
    <div>
      {loader ? (
        <>
          <LoadingSpinner />
        </>
      ) : (
        <>
          {" "}
          <section className="bg-gray-100 py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {allArtWorks.map((artWork, index) => (
                  <Card
                    key={index}
                    artId={artWork?._id}
                    image={artWork?.image}
                    name={artWork?.name}
                    category={artWork?.category}
                  />
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default CardsLayout;
