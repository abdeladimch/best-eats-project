import { useAuth0 } from "@auth0/auth0-react";

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <div className="flex h-screen justify-center items-center text-8xl">
        Loading ...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen justify-center items-center text-4xl">
        {error.message}
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthWrapper;
