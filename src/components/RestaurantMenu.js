import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantmenu";
import ItemList from "./ItemList";
import { useState } from "react";
import Lottie from "lottie-react";
import cooking from "../assets/cooking.json";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resinfo = useRestaurantMenu(resId);
  const [openCardIdx, setOpenCardIdx] = useState(0);

  const restroInfo = resinfo?.data?.cards?.[0]?.card?.card?.info;
  const offers =
    resinfo?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.offers;
  const foodSectionCards =
    resinfo?.data?.cards?.[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
    resinfo?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const handleClick = (idx) => {
    if (openCardIdx === idx) {
      setOpenCardIdx(null);
    } else {
      setOpenCardIdx(idx);
    }
  };
  if (!foodSectionCards) {
    return (
      <div className="w-4/12 m-auto">
        <Lottie animationData={cooking}></Lottie>
      </div>
    );
  }
  console.log(foodSectionCards);

  return (
    <div className="text-center p-2 m-6 text-2xl font-bold">
      <h1 className="mb-4">{restroInfo?.name}</h1>
      {foodSectionCards?.map((list, idx) => {
        return (
          <div
            key={idx}
            className="bg-white  w-6/12 m-auto rounded-lg cursor-pointer "
          >
            <div
              className="bg-neutral-200 px-4 rounded-xl mb-1"
              onClick={() => handleClick(idx)}
            >
              <div className="flex justify-between border-b-2 border-gray-300 items-center">
                <span className="font-bold py-3 text-lg">
                  {list?.card?.card?.title} (
                  {list?.card?.card?.itemCards?.length})
                </span>
                {openCardIdx === idx ? (
                  <span className="text-xl">⬆️</span>
                ) : (
                  <span className="text-xl">⬇️</span>
                )}
              </div>
            </div>
            <div
              className={`text-left bg-gray-50 mb-2 transition-all duration-700 overflow-y-scroll ${
                openCardIdx === idx ? "max-h-[700px]" : "max-h-0"
              }`}
            >
              {openCardIdx === idx && (
                <ItemList items={list?.card?.card?.itemCards} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
