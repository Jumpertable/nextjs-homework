"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import DeleteButton from "./DeleteButton";
import CustomerType from "./customer.type";

export default function CustomerPage() {
  const [customers, setCustomers] = useState<CustomerType[]>([]);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    const fetchCustomers = async () => {
      try {
        const res = await fetch("http://localhost:3000/customer");
        const data = await res.json();
        setCustomers(data);
      } catch (err) {
        console.error("Failed to fetch customers", err);
      }
    };

    fetchCustomers();
  }, []);

  if (!hasMounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-purple-600 py-10 px-4 text-purple-700">
      <h1 className="text-2xl font-extrabold mb-6 text-center drop-shadow">
        Customer List
      </h1>

      {customers.length === 0 ? (
        <div className="text-center text-purple-500 animate-pulse">
          Loading Customers...
        </div>
      ) : (
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {customers.map((customer, index) => (
            <div
              key={customer.id}
              className="bg-white p-6 rounded-xl shadow-md hover:scale-[1.01] transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-bold">
                  {customer.id}. {customer.name}
                </h2>
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    customer.isActive
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {customer.isActive ? "Active" : "Inactive"}
                </span>
              </div>
              <p className="text-sm mb-1">
                <span className="font-semibold">Position:</span>{" "}
                {customer.position}
              </p>
              <p className="text-sm mb-1">
                <span className="font-semibold">Email:</span> {customer.email}
              </p>
              <p className="text-sm mb-3">
                <span className="font-semibold">Phone:</span> {customer.phone}
              </p>

              <div className="flex justify-end gap-2">
                <Link
                  className="px-4 py-1 bg-blue-400 text-blue-900 rounded  hover:bg-blue-500 hover:text-white"
                  href={`/customer/edit/${customer.id}`}
                >
                  Edit
                </Link>
                <DeleteButton
                  id={customer.id}
                  onDelete={() => {
                    setCustomers((prev) =>
                      prev.filter((c) => c.id !== customer.id)
                    );
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="text-center">
        <Link
          href="/customer/new"
          className="inline-block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add New Customer
        </Link>
      </div>
    </div>
  );
}
