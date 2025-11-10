import React from "react";

const orders = [
  { username: "John Doe", email: "john@example.com", orderDate: "2025-09-25", status: "Completed", amount: "$120" },
  { username: "Alice Smith", email: "alice@example.com", orderDate: "2025-09-26", status: "Pending", amount: "$89" },
  { username: "Michael Lee", email: "mike@example.com", orderDate: "2025-09-27", status: "Cancelled", amount: "$40" },
  { username: "Sophia Brown", email: "sophia@example.com", orderDate: "2025-09-27", status: "Completed", amount: "$210" },
  { username: "Chris Green", email: "chris@example.com", orderDate: "2025-09-28", status: "Completed", amount: "$330" },
  { username: "Olivia Stone", email: "olivia@example.com", orderDate: "2025-09-28", status: "Pending", amount: "$150" },
  { username: "David Kim", email: "david@example.com", orderDate: "2025-09-29", status: "Completed", amount: "$275" },
  { username: "Emma Wilson", email: "emma@example.com", orderDate: "2025-09-29", status: "Completed", amount: "$95" },
  { username: "James Scott", email: "james@example.com", orderDate: "2025-09-30", status: "Pending", amount: "$180" },
  { username: "Lucas Johnson", email: "lucas@example.com", orderDate: "2025-10-01", status: "Completed", amount: "$400" },
];

const OrdersTable = () => {
  return (
    <div className="overflow-x-auto sm:w-auto w-screen mt-10">
      <h1 className="sm:text-2xl font-semibold my-3">Recent Orders</h1>
      <table className="min-w-full border dark:border-gray-800 border-gray-200 rounded-lg text-sm">
        <thead className="bg-gray-100 dark:bg-gray-800 text-left">
          <tr>
            <th className="px-4 py-2 border-b">Username</th>
            <th className="px-4 py-2 border-b">Email</th>
            <th className="px-4 py-2 border-b whitespace-nowrap">Order Date</th>
            <th className="px-4 py-2 border-b">Status</th>
            <th className="px-4 py-2 border-b">Amount</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
              <td className="px-4 py-2 border-b dark:border-gray-800  whitespace-nowrap">{order.username}</td>
              <td className="px-4 py-2 border-b dark:border-gray-800  whitespace-nowrap">{order.email}</td>
              <td className="px-4 py-2 border-b dark:border-gray-800  whitespace-nowrap">{order.orderDate}</td>
              <td
                className={`px-4 py-2 border-b dark:border-gray-800 font-medium ${
                  order.status === "Completed"
                    ? "text-green-600"
                    : order.status === "Pending"
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                {order.status}
              </td>
              <td className="px-4 py-2 border-b dark:border-gray-800">{order.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
