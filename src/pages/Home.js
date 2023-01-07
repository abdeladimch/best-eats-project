import { Navbar, Hero, Cards, FoodMenu, Footer } from "../components";
import { useState } from "react";

const Home = () => {
  const [cartItems, setCartItems] = useState(0);

  const handleCart = () => {
    setCartItems((value) => value + 1);
  };

  return (
    <>
      <Navbar cartItems={cartItems} />
      <Hero />
      <Cards />
      <FoodMenu handleCart={handleCart} />
      <Footer />
    </>
  );
};

export default Home;
