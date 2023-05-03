import React, { useState, useEffect } from "react";
import axios from "axios";

const ContactRequests = () => {

    useEffect(() => {
        const fetchContactRequests = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/contact-requests`);
            } catch (err) {
                console.error(err);
            }
    };

    fetchContactRequests();
    });

  return (
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Details</th>
            </tr>
        </thead>
        <tbody>
             show the fetched data
        </tbody>
    </table>
  );
};

export default ContactRequests;