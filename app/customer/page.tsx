import Link from "next/link";
import CustomerType from "./customer.type";
import DeleteButton from "./DeleteButton";
import { SERVER_URL } from "../constant";
import { cookies } from "next/headers";

type RegisteredUser = {
  id: number;
  username: string;
  email: string;
};

export default async function CustomerPage() {
  const cookieStore = cookies();
  const token = (await cookieStore).get("access_token")?.value;

  const customerRes = await fetch(`${SERVER_URL}/customer`, {
    cache: "no-store",
  });

  const userRes = await fetch(`${SERVER_URL}/auth/all`, {
    headers: {
      Cookie: `access_token=${token}`,
    },
    cache: "no-store",
  });

  const customers: CustomerType[] = await customerRes.json();
  const usersRaw = await userRes.json();

  const users: RegisteredUser[] = Array.isArray(usersRaw) ? usersRaw : [];

  return (
    <div className="w-[90%] mx-auto min-h-[80vh] p-8 space-y-12">
      {/* CUSTOMER SECTION */}
      <section>
        <h1 className="text-xl font-bold mb-4">Customers</h1>
        <div className="flex flex-wrap gap-6 mb-2">
          {customers.map((customer, index) => (
            <div
              className={`flex flex-col justify-between mb-6 min-w-96 min-h-52 p-4 rounded-lg shadow-lg bg-white`}
              key={customer.id}
            >
              <div>
                <div className="flex">
                  <span>{index + 1}</span>
                  <span className="ml-2 mr-auto">{customer.name}</span>
                  <span
                    className={`${
                      customer.isActive ? "bg-yellow-200" : "bg-orange-200"
                    } border border-black px-2 rounded-md`}
                  >
                    {customer.isActive ? "Active" : "Inactive"}
                  </span>
                </div>
                <div>{customer.position}</div>
                <div>{customer.email}</div>
                <div>{customer.phone}</div>
              </div>

              <div className="mt-4 flex justify-end gap-2">
                <Link
                  className="p-2 bg-green-100 rounded-md border shadow-md"
                  href={`/customer/edit/${customer.id}`}
                >
                  Edit
                </Link>
                <DeleteButton id={customer.id} />
              </div>
            </div>
          ))}
        </div>

        <Link
          className="p-2 bg-blue-200 rounded-md hover:bg-blue-700 hover:text-white"
          href="/customer/new"
        >
          Add New
        </Link>
      </section>

      {/* REGISTERED USERS SECTION */}
      <section>
        <h2 className="text-xl font-bold mb-4">Registered Users</h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {users.map((user) => (
            <div
              key={user.id}
              className="p-4 rounded-md border shadow bg-white"
            >
              <div className="font-semibold text-gray-700">
                {user.username}
              </div>
              <div className="text-sm text-gray-500">{user.email}</div>
              <div className="text-xs text-gray-400 mt-1">ID: {user.id}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
