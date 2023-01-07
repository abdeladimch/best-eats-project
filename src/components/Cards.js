import Card from "./Card";

const Cards = () => {
  const card1 = {
    img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400",
    h2: "Sun's Out, BOGO's Out",
    p: "Through 8/26",
    name: "dish1",
  };

  const card2 = {
    img: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600",
    h2: "New Restaurants",
    p: "Added Daily",
    name: "dish2",
  };

  const card3 = {
    img: "https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    h2: "We Deliver Desserts Too",
    p: "Tasty Treats",
    name: "dish3",
  };

  return (
    <section>
      <div className="container py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card card={card1} />
          <Card card={card2} />
          <Card card={card3} />
        </div>
      </div>
    </section>
  );
};

export default Cards;
