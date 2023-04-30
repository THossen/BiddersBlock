import { Link } from "react-router-dom";
import useAuth from "../../Providers/useAuth";

const Sidebar = () => {
  const { user } = useAuth();

  const links = [
    { to: "/ProfilePage/UserInfo", label: "Profile" },
    { to: "/ProfilePage/AuctionsWon", label: "Auctions Won" },
    { to: "/ProfilePage/AddAuctionForm", label: "Your Auctions" },
  ];

  return (
    <div className="bg-white py-4 shadow-xl w-96 flex flex-col min-h-screen">
      <div className="flex items-center justify-center text-center">
        <div className="ml-4">
          <h4 className="text-6xl font-semibold text-gray-700 capitalize">
            {user ? user.userName : "Guest"}
          </h4>
        </div>
      </div>

      <div className="mt-8">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="flex items-center py-4 pl-6 pr-8 text-lg font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-l-4 hover:border-gray-800"
          >
            <span className="mx-4">{link.label}</span>
          </Link>
        ))}
      </div>
      <div className="mt-auto"></div>
    </div>
  );
};

export default Sidebar;
