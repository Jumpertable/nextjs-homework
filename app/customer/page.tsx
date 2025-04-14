"use client";

import { useEffect, useState } from "react";

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
    const res = await fetch('http://localhost:3000/customers');  // NEST API
    const data = await res.json();
    setCustomers(data);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  if (customers.length === 0) {
    return <div className="text-center mt-10 text-purple-500">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Customer List</h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {customers.map((customer) => (
          <div key={customer.id} className="bg-white p-4 rounded-lg shadow hover:scale-105 transition">
            <p><span className="font-semibold">ID:</span> {customer.id}</p>
            <p><span className="font-semibold">Full Name:</span> {customer.fullname}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
