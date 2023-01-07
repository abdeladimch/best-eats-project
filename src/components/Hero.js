const Hero = () => {
  return (
    <div className="container p-4 pb-12 ">
      <div className="text-4xl text-white font-bold bg-black/40 relative w-[400px] mx-auto md:w-auto max-h-[400px]">
        <img
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="burger"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute top-1/2 -translate-y-1/2 w-full bg-black/60 h-full flex flex-col justify-center pl-4">
          <h1>
            The <span className="text-orange-600">Best</span>
            <br />
            <span className="text-orange-600">Foods </span>
            Delivered
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
