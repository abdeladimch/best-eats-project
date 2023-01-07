import { useAuth0 } from "@auth0/auth0-react";
import poster from "../images/poster.png";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="bg-gray-100">
      <div className="container flex flex-col items-center justify-center h-screen ">
        <img
          src={poster}
          className="h-[400px]  w-full object-cover mb-12"
          alt="login-img"
        />
        <button
          onClick={loginWithRedirect}
          className="py-2 px-3 bg-black rounded-lg text-white"
        >
          Login / Signup
        </button>
      </div>
    </div>
  );
};

export default Login;
