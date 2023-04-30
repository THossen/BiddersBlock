import React from 'react';
import useAuth from "../../Providers/useAuth";

const UserInfo = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <div className="rounded-lg shadow-lg w-full h-full p-4">
      <h2 className="text-4xl font-bold text-gray-800 md:text-5xl mb-4">
        User Info
      </h2>
      <div className="text-1x1 text-gray-800 text-center py-1">
        <table className="w-full border-collapse">
          <tr>
            <td className="border px-4 py-2 text-left font-medium">Name:</td>
            <td className="border px-4 py-2 text-right">{user ? user.userFirstName : "First Name"} {user ? user.userLastName : "Last Name"}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-left">Email: </td>
            <td className="border px-4 py-2 text-right">{user ? user.userEmail : "Email"}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-left">Address: </td>
            <td className="border px-4 py-2 text-right">{user ? user.userAddress : "Address"}</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default UserInfo