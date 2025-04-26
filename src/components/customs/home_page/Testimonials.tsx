"use client";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    text: "Whitepace is designed as a collaboration tool for businesses that is a full project management solution.",
    name: "Oberon Shaw, MCH",
    title: "Head of Talent Acquisition, North America",
    image: "/avater-5.jpg",
    bgColor: "bg-white hover:bg-[#6eb4fc]",
    textColor: "text-[#043873] hover:text-white",
  },
  {
    id: 2,
    text: "Whitepace is designed as a collaboration tool for businesses that is a full project management solution.",
    name: "Oberon Shaw, MCH",
    title: "Head of Talent Acquisition, North America",
    image: "/avater-9.jpg",
    bgColor: "bg-[#6eb4fc] hover:bg-white",
    textColor: "text-white hover:text-[#043873]",
  },
  {
    id: 3,
    text: "Whitepace is designed as a collaboration tool for businesses that is a full project management solution.",
    name: "Oberon Shaw, MCH",
    title: "Head of Talent Acquisition, North America",
    image: "/avater-3.jpg",
    bgColor: "bg-white hover:bg-[#6eb4fc]",
    textColor: "text-[#043873] hover:text-white",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-white text-center">
      <h2 className="text-4xl text-[#043873] font-bold mb-12">
        What Our Clients{" "}
        <span className="relative inline-block  z-10">
          Says
          <span className="absolute bottom-1 left-0 w-full h-2 bg-[#FFE492] -z-10"></span>
        </span>
      </h2>

      <div className="flex justify-center gap-6 flex-wrap md:flex-nowrap transition-all">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className={`p-6 rounded-lg shadow-md w-full md:w-1/3 ${item.bgColor} ${item.textColor}`}
          >
            <FaQuoteLeft size={30} className="mb-4" />
            <p className="mb-6">{item.text}</p>
            <div className="border border-t-2 shadow-2xl"></div>
            <div className="flex items-center gap-4 mt-4">
              <div className="relative w-14 h-14 rounded-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={56}
                  height={56}
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="text-left">
                <h4 className="font-bold">{item.name}</h4>
                <p className="text-sm opacity-80">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
