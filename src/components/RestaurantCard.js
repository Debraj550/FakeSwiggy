import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  locality,
  lastMileTravelString,
  costForTwo,
  avgRating,
}) => {
  return (
    <div className="px-2 py-2 w-[300px] gap-2">
      <div className="mb-1">
        <img
          className="rounded-lg mb-2 overflow-x-hidden"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="mb-2">
        <h3 className="font-serif font-bold text-lg py-1 truncate">{name}</h3>
        <h5 className="text-md font-semibold">
          <i className="fa fa-star text-red-500"></i>
          {avgRating}
        </h5>
      </div>

      <div className="mb-2">
        <h4 className="text-gray-500 text-md flex flex-wrap truncate">
          {cuisines?.toString()}
        </h4>
      </div>
      <div className="my-2 flex justify-between font-semibold">
        <h5 className=" text-gray-700 ">{locality}</h5>
        <h5 className="text-gray-700">{costForTwo}</h5>
      </div>
    </div>
  );
};

export const PromotedRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-black text-white absolute p-2 m-2 rounded-xl">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
