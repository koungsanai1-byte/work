import React, { useEffect, useState } from "react";
import { Link, Links } from "react-router-dom";

export default function List() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/list") // Adjust URL if needed
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Unknown error");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-4 text-center">Loading users...</div>;
  if (error)
    return (
      <div className="p-4 text-center text-red-600">
        Error: {error}
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <table className="min-w-full border border-gray-300 rounded-md overflow-hidden">
        <Link to={"/"}>back</Link>
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-3 border-b border-gray-300">ID</th>
            <th className="text-left p-3 border-b border-gray-300">Name</th>
            <th className="text-left p-3 border-b border-gray-300">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 && (
            <tr>
              <td
                colSpan="3"
                className="text-center p-4 text-gray-500"
              >
                No users found.
              </td>
            </tr>
          )}
          {users.map(({ id, name, email }) => (
            <tr
              key={id}
              className="hover:bg-gray-50 transition-colors"
            >
              <td className="p-3 border-b border-gray-300">{id}</td>
              <td className="p-3 border-b border-gray-300">{name}</td>
              <td className="p-3 border-b border-gray-300">{email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
