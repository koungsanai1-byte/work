import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:3000/api/create`, { name, password, email })
      .then(res => {
        setName('');
        setPassword('');
        setEmail('');
        alert("✅ User created successfully!");
        navigate("/list");
      })
      .catch(err => {
        alert("❌ Failed to create user.");
      });
  };

  const cancel = (event) => {
    event.preventDefault();
    setName('');
    setPassword('');
    setEmail('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md space-y-6"
      >
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Create New User
        </h1>

        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700">Password</label>
          <input
            type="password"
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
          >
            Save
          </button>
          <button
            onClick={cancel}
            type="button"
            className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
          >
            Cancelaaaaa
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
