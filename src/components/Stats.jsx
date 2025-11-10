import CountUp from "react-countup";
import { Users, Book, Store, Leaf } from "lucide-react";

const statsData = [
  {
    id: 1,
    value: "105663",
    label: "Happy Customers",
    icon: <Users size={40} />,
  },
  {
    id: 2,
    value: "50432",
    label: "Book Collections",
    icon: <Book size={40} />,
  },
  { id: 3, value: "1204", label: "Our Stores", icon: <Store size={40} /> },
  { id: 4, value: "543", label: "Famous Writers", icon: <Leaf size={40} /> },
];

function Stats() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-8 py-16 sm:px-12 text-center dark:bg-gray-800 bg-gray-100">
      {statsData.map((stat) => {
        return (
          <div key={stat.id} className="flex flex-col items-center">
            <div className="p-6 border-2 border-dashed border-[var(--baseColor)] rounded-md">
              <span className="text-[var(--baseColor)] text-3xl">{stat.icon}</span>
            </div>
            <h2 className="text-2xl font-bold text-[var(--darker)] dark:text-[var(--lighter)] mt-2">
              <CountUp end={stat.value} duration={2} separator="," />
            </h2>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        );
      })}
    </section>
  );
}

export default Stats;
