import { useEffect, useState } from "react";
import { restaurantList } from "../data/data";
import { RESTAURANTS_DETAIL_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resdata, setResdata] = useState([]);
  const url = RESTAURANTS_DETAIL_URL + resId;

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const data = await fetch(url);
      const json = await data?.json();
      setResdata(json);
    } catch (err) {
      console.log(err);
    }
  };

  return resdata;
};

export default useRestaurantMenu;
