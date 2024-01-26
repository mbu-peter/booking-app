import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <div className="bg-gradient-to-r from-red-600 via-black to-orange-500 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">MPSafaris.com</Link>
        </span>
        <span className="flex space-x-4">
          {isLoggedIn ? (
            <>
              <Link
                className="text-white hover:text-red-300 transition duration-300"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="text-white hover:text-red-300 transition duration-300"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <Link
                className="text-white hover:text-red-300 transition duration-300"
                to="/explore"
              >
                Explore
              </Link>
              <Link
                className="text-white hover:text-red-300 transition duration-300"
                to="/new-link-2"
              >
                About
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="bg-white text-black px-3 py-1 font-bold rounded-md hover:bg-gray-100 transition duration-300"
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
