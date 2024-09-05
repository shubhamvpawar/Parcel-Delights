import { CDN_URL } from "../utils/constants";
import { FaStar } from "react-icons/fa";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData.info;
  return (
    <div className="res-card m-1 p-1 w-[300px] bg-gray-50 rounded-lg transition-transform hover:scale-90 shadow-md">
      <img
        className="res-logo rounded-lg w-full h-[150px]"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold text-lg truncate">{name}</h3>
      <h4 className="text-base cuisine-card whitespace-no-wrap overflow-hidden overflow-ellipsis truncate font-semibold">
        {cuisines.join(", ")}
      </h4>
      <h4 className="text-sm text-opacity-30 truncate flex items-center">
        <FaStar /> {avgRating} · {resData.info.sla.deliveryTime} min's away
      </h4>
      <h4 className="text-sm text-opacity-30 pl-1">{costForTwo} </h4>
    </div>
  );
};

export default RestaurantCard;
