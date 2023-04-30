import React from 'react';
import useAuth from "../../Providers/useAuth";
import axios from 'axios';


const UserInfo = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <div className="rounded-lg shadow-lg w-full h-full">
      <h2 className="text-4xl font-bold text-gray-800 md:text-5xl">
        User Info
      </h2>
      <div className="text-1x1 text-gray-800 text-center py-1">
        <table>
          <tr>
            <td text-align='center'>{user ? user.userFirstName : "First Name"} {user ? user.userLastName : "Last Name"}</td>
          </tr>
          <tr>
            <td align='left'>Email: </td>
            <td align='right'>{user ? user.userEmail : "Email"}</td>
          </tr>
          <tr>
            <td>Address: </td>
            <td align='right'>{user ? user.userAddress : "Address"}</td>
          </tr>
        </table>
        </div>
    </div>
  )
}

export default UserInfo