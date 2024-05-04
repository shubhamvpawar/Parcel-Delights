import { useState } from "react";
import ItemList from "./itemList";



const RestaurantCategories = ({ data, showItems, setShowIndex }) => {
    // console.log(data);
    // const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        // setShowItems(!showItems);
        setShowIndex();
    };

    return (<div>
        {/* Header */}
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg  ">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span className="font-extrabold text-2xl">⬇</span>
            </div>
            {showItems && <ItemList items={data.itemCards} />}
        </div>
    </div>);
};

export default RestaurantCategories;

