import useAuth from "../../Providers/useAuth";
import { FaUser, FaMapMarkerAlt } from "react-icons/fa";

const UserInfo = () => {
  const { user } = useAuth();

  return (
    <div className="bg-gray-100 rounded-lg shadow-xl p-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        User Info
      </h2>
      <div className="text-lg text-gray-600 grid grid-cols-2 gap-8">
        <div className="flex items-center space-x-4">
          <FaUser className="text-gray-400 text-2xl" />
          <div>
            <div className="font-semibold text-lg">{user ? `${user.userFirstName} ${user.userLastName}` : "Unknown"}</div>
            <div className="text-sm">{user ? user.userEmail : "Unknown"}</div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FaMapMarkerAlt className="text-gray-400 text-2xl" />
          <div>
            <div className="font-semibold text-lg">Address</div>
            <div className="text-sm">{user ? user.userAddress : "Unknown"}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfo;
