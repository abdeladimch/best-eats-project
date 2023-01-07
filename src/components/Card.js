const Card = ({ card }) => {
  return (
    <div className="mx-auto relative card-hover cursor-default">
      <div className="absolute h-full text-white z-10 p-4 font-bold">
        <h2 className="text-xl">{card.h2}</h2>
        <p className="font-normal">{card.p}</p>
      </div>
      <img
        src={card.img}
        alt={card.name}
        className=" w-[400px] h-[193.5px] rounded-xl"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>
    </div>
  );
};

export default Card;
