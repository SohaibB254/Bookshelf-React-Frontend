import { Truck, ShieldCheck, ThumbsUp, RotateCcw } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Truck className="w-10 h-10 " />,
      title: "Quick Delivery",
      desc: "Get your books delivered swiftly and reliably with our trusted delivery partners."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 " />,
      title: "Secure Payment",
      desc: "Enjoy safe and encrypted payment options for a worry-free shopping experience."
    },
    {
      icon: <ThumbsUp className="w-10 h-10" />,
      title: "Best Quality",
      desc: "We ensure top-quality books and resources to give you the best value."
    },
    {
      icon: <RotateCcw className="w-10 h-10" />,
      title: "Return Guarantee",
      desc: "Hassle-free returns so you can shop with confidence every time."
    }
  ];

  return (
    <section className=" py-4 sm:py-16 dark:bg-gray-900 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {features.map((f, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div
            className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg cursor-pointer text-[var(--comp)] transition dark:hover:bg-[var(--baseColor)] dark:hover:text-white hover:text-white hover:bg-[var(--baseColor)] mb-4">{f.icon}</div>
            <h3 className="text-lg font-bold text-[var(--darker)] dark:text-[var(--lighter)] mb-2">{f.title}</h3>
            <p className="text-gray-500 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
