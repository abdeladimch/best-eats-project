const MenuItem = ({ item, handleCart }) => {
  return (
    <div className="mx-auto bg-white shadow-lg rounded-xl card-hover cursor-default">
      <img
        src={item.img}
        alt={item.name}
        className=" w-[400px] h-[193.5px] object-cover"
      />
      <div
        className="flex items-center justify-between px-4
      py-3"
      >
        <h2 className="font-medium">{item.name}</h2>
        <span className="bg-orange-600 text-white p-1 rounded-lg">
          {item.price}
        </span>
      </div>
      <div className="px-2 pb-3">
        <button
          type="button"
          className="py-2 text-white bg-black rounded-xl w-32 menu-item-btn"
          onClick={() => handleCart()}
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
