import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

    // console.log(items);

    const dispatch = useDispatch();

    const handleAddItems = (item) => {
        //Dispatch an action
        dispatch(addItem(item))
    };

    return (
        <div >
            {items.map((item) => (
                <div key={item.card.info.id}
                    className="p-2 m-2 text-left border-b-2 border-gray-200 flex justify-between">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span>- ₹{" "}{
                                item.card.info.price
                                    ? item.card.info.price / 100
                                    : item.card.info.defaultPrice / 100}</span>
                        </div>
                        <p className="text-xs text-gray-800 hidden md:block">{item.card.info.description}</p>
                    </div>
                    {/* <div className="w-3/12 flex flex-col items-center">
                        <img src={CDN_URL + item.card.info.imageId} className="w-20 h-12 rounded-xl mb-0.5"></img>
                        <button className="bg-gray-100 text-green-600 px-2 py-0.5 rounded-md shadow-md transition-transform transform hover:scale-90 font-bold"
                            onClick={() => handleAddItems(item)} >
                            Add+</button>
                    </div> */}
                    <div className="w-3/12 flex flex-col items-center">
                        {item.card.info.imageId && (
                            <img
                                src={CDN_URL + item.card.info.imageId}
                                className="w-20 h-12 rounded-xl mb-0.5"
                                alt="Item Image"
                            />
                        )}
                        <button
                            className="bg-gray-100 text-green-600 px-2 py-0.5 rounded-md shadow-md transition-transform transform hover:scale-90 font-bold"
                            onClick={() => handleAddItems(item)}
                        >
                            Add+
                        </button>
                    </div>

                </div >
            ))}
        </div >
    );
};

export default ItemList;