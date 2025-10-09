import React from "react";
import OrdersTable from "./OrdersTable";
import DataCharts from "./DataCharts";
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

const Dashboard = () => {
  return (
    <>
      <div className="flex overflow-x-hidden px-2 font-inter dark:text-gray-300 ">
        <div id="dashboardContainer" className="  sm:px-12 py-4">
            <h1 className="sm:text-2xl font-semibold my-3">Analytics</h1>
          <div id="analytics" className=" flex gap-3 sm:px-0 px-12 flex-wrap ">
            <div id="card" className="py-2 px-4 h-[200px] w-64 rounded-lg flex flex-col gap-3 shadow-sm shadow-gray-600 dark:shadow-inner  dark:shadow-gray-700/60 dark:bg-gray-800 dark:border-gray-800  "
            >
              <div className="flex justify-between">
                <h4 className="text-zinc-500">Users</h4>
                <p className="px-1 border flex gap-1 items-center dark:border-gray-800  rounded-md">
                  <i className="fa-solid fa-arrow-trend-up"></i>+12%
                </p>
              </div>
              <h1 className="sm:text-3xl text-xl font-bold ">8000</h1>
              <div className="text-sm">
                <p>Client rate increased this month</p>
                <p className="text-zinc-500">Meets growth projection</p>
              </div>
            </div>
            <div id="card"  className="py-2 px-4 h-[200px] w-64 rounded-lg flex flex-col gap-3 shadow-sm shadow-gray-600 dark:shadow-inner  dark:shadow-gray-700/60 dark:bg-gray-800 dark:border-gray-800 "
            >
              <div className="flex justify-between">
                <h4 className="text-zinc-500">Books</h4>
                <p className="px-1 border flex gap-1 items-center dark:border-gray-800  rounded-md">
                  <i className="fa-solid fa-arrow-trend-up"></i>+10.3%
                </p>
              </div>
              <h1 className="sm:text-3xl text-xl font-bold ">30,000+</h1>
              <div className="text-sm">
                <p>100+ added every month</p>
                <p className="text-zinc-500">Meets growth projection</p>
              </div>
            </div>
            <div  id="card" className="py-2 px-4 h-[200px] w-64 rounded-lg flex flex-col gap-3 shadow-sm shadow-gray-600 dark:shadow-inner  dark:shadow-gray-700/60 dark:bg-gray-800 dark:border-gray-800 "
            >
              <div className="flex justify-between">
                <h4 className="text-zinc-500">Sales</h4>
                <p className="px-1 border  flex gap-1 dark:border-gray-800 items-center rounded-md">
                  <i className="fa-solid fa-arrow-trend-up"></i>+14.5%
                </p>
              </div>
              <h1 className="sm:text-3xl text-xl font-bold ">1300</h1>
              <div className="text-sm">
                <p>Sales rate increased this month</p>
                <p className="text-zinc-500">Meets growth projection</p>
              </div>
            </div>
            <div id="card" className="py-2 px-4 h-[200px] w-64 rounded-lg flex flex-col gap-3 shadow-sm shadow-gray-600 dark:shadow-inner  dark:shadow-gray-700/60 dark:bg-gray-800 dark:border-gray-800 "
            >
              <div className="flex justify-between">
                <h4 className="text-zinc-500">Orders</h4>
                <p className="px-1 border flex gap-1 items-center dark:border-gray-800  rounded-md">
                  <i className="fa-solid fa-arrow-trend-up"></i>+4%
                </p>
              </div>
              <h1 className="sm:text-3xl text-xl font-bold ">1200</h1>
              <div className="text-sm">
                <p>Orders rate increased this month</p>
                <p className="text-zinc-500">Meets growth projection</p>
              </div>
            </div>
          </div>
            <DataCharts/>
          <OrdersTable/>
        </div>
      </div>

    </>
  );
};

export default Dashboard;
