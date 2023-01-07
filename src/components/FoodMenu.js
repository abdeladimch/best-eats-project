import { useState } from "react";
import MenuItem from "./MenuItem";
import { data } from "../data";

const FoodMenu = ({ handleCart }) => {
  const [items, setItems] = useState(data);

  const handlePrice = (price) => {
    setItems(data.filter((item) => item.price === price));
  };

  const handleCategory = (category) => {
    setItems(data.filter((item) => item.category === category));
  };

  const handleAll = () => {
    setItems(data);
  };

  return (
    <section>
      <div className="py-12 p-4 container">
        <div className="w-[400px] mx-auto md:w-auto">
          <h1 className="text-2xl font-bold text-orange-600 text-center mb-8">
            Top Rated Menu Items
          </h1>
          <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
            <div>
              <p className="font-medium">Filter Type</p>
              <div className="flex gap-3 text-sm mt-3">
                <button
                  type="button"
                  className=" w-[70px] btn"
                  onClick={() => {
                    handleAll();
                  }}
                >
                  All
                </button>
                <button
                  type="button"
                  className=" w-[70px] btn"
                  onClick={() => {
                    let category = "Burgers";
                    handleCategory(category);
                  }}
                >
                  Burgers
                </button>
                <button
                  type="button"
                  className=" w-[70px] btn"
                  onClick={() => {
                    let category = "Pizza";
                    handleCategory(category);
                  }}
                >
                  Pizza
                </button>
                <button
                  type="button"
                  className=" w-[70px] btn"
                  onClick={() => {
                    let category = "Salad";
                    handleCategory(category);
                  }}
                >
                  Salad
                </button>
                <button
                  type="button"
                  className=" w-[70px] btn"
                  onClick={() => {
                    let category = "Chicken";
                    handleCategory(category);
                  }}
                >
                  Chicken
                </button>
              </div>
            </div>

            <div>
              <p className="font-medium">Filter Price</p>
              <div className="flex gap-3 text-sm mt-3">
                <button
                  type="button"
                  className=" w-[50px] btn "
                  onClick={() => {
                    let price = "$";
                    handlePrice(price);
                  }}
                >
                  $
                </button>
                <button
                  type="button "
                  className=" w-[50px] btn"
                  onClick={() => {
                    let price = "$$";
                    handlePrice(price);
                  }}
                >
                  $$
                </button>
                <button
                  type="button"
                  className="w-[50px] btn"
                  onClick={() => {
                    let price = "$$$";
                    handlePrice(price);
                  }}
                >
                  $$$
                </button>
                <button
                  type="button"
                  className=" w-[50px] btn"
                  onClick={() => {
                    let price = "$$$$";
                    handlePrice(price);
                  }}
                >
                  $$$$
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {items.map((item, idx) => {
            return <MenuItem item={item} key={idx} handleCart={handleCart} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FoodMenu;
