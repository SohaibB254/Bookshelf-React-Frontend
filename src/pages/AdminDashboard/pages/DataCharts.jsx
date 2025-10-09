import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { useTheme } from "../../../context/ThemeContext";

const visitorsData = [
  { day: "Mon", visitors: 120 },
  { day: "Tue", visitors: 200 },
  { day: "Wed", visitors: 150 },
  { day: "Thu", visitors: 250 },
  { day: "Fri", visitors: 180 },
  { day: "Sat", visitors: 300 },
  { day: "Sun", visitors: 220 },
];

const salesData = [
  { day: "Mon", sales: 10 },
  { day: "Tue", sales: 15 },
  { day: "Wed", sales: 8 },
  { day: "Thu", sales: 20 },
  { day: "Fri", sales: 18 },
  { day: "Sat", sales: 25 },
  { day: "Sun", sales: 14 },
];

const DataCharts = () => {
  let { theme } = useTheme();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      {/* Visitors Line Chart */}
      <div className="bg-white dark:bg-gray-900 dark:border-gray-800 p-4 rounded-xl shadow-md border">
        <h2 className="text-lg font-semibold mb-3">Visitors (This Week)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={visitorsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip
              contentStyle={{
                backgroundColor: theme === "dark" ? "#0f172a" : "#ffffff",
                color: theme === "dark" ? "#f1f5f9" : "#1e293b",
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="visitors"
              stroke="#4F46E5"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Sales Bar Chart */}
      <div className="bg-white dark:bg-gray-900 dark:border-gray-800 p-4 rounded-xl shadow-md border">
        <h2 className="text-lg font-semibold mb-3">Sales (This Week)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip
              contentStyle={{
                backgroundColor: theme === "dark" ? "#0f172a" : "#ffffff",
                color: theme === "dark" ? "#f1f5f9" : "#1e293b",
              }}
            />
            <Legend />
            <Bar
              dataKey="sales"
              fill= "#24BF6C"
              barSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DataCharts;
