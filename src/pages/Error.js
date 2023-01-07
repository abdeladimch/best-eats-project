import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col gap-12 h-screen items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-bold">404</h1>
      <h3 className="text-3xl font-bold">Not Found</h3>
      <Link to="/">
        <button className="py-2 px-3 bg-black rounded-lg text-white">
          Back Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
