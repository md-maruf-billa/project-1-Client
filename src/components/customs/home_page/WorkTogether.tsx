"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function WorkTogether() {
  const dots = [
    {
      top: "2%",
      left: "55%",
      bg: "bg-yellow-400",
      img: "/avater-2.jpg",
    },
    {
      top: "20%",
      left: "50%",
      bg: "bg-blue-400",
      img: "/avater-3.jpg",
    },
    {
      top: "45%",
      left: "95%",
      bg: "bg-green-500",
      img: "/avater-4.jpg",
    },
    {
      top: "55%",
      left: "80%",
      bg: "bg-blue-400",
      img: "/avater-5.jpg",
    },
    {
      top: "80%",
      left: "50%",
      bg: "bg-orange-300",
      img: "/avater-6.jpg",
    },
    {
      top: "90%",
      left: "65%",
      bg: "bg-blue-400",
      img: "/avater-7.jpg",
    },
    {
      top: "55%",
      left: "20%",
      bg: "bg-red-400",
      img: "/avater-7.jpg",
    },
    {
      top: "75%",
      left: "15%",
      bg: "bg-blue-400",
      img: "/avater-8.jpg",
    },
    {
      top: "50%",
      left: "50%",
      bg: "bg-green-500",
      img: "/avater-9.jpg",
    },
    {
      top: "35%",
      left: "10%",
      bg: "bg-green-500",
      img: "/avater-10.jpg",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-24 max-w-7xl mx-auto">
      {/* Orbit Dots Section */}
      <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex-shrink-0 mx-auto mb-12 md:mb-0">
        {/* Center Icon */}
        <div className="absolute top-1/2 left-1/2 shadow-lg border p-2 border-dashed border-blue-500 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white  rounded-xl flex items-center justify-center z-10">
          <Image
            src="/logo.png"
            alt="Center Icon"
            width={56}
            height={56}
            className="rounded-xl"
          />
        </div>

        {/* Outer Circles */}
        <div className="absolute w-[100] h-[100] inset-5 border border-dashed border-blue-300 rounded-full"></div>
        <div className="absolute inset-20 border border-dashed border-blue-300 rounded-full"></div>

        {/* Orbiting Dots */}
        {dots.map((dot, i) => (
          <div
            key={i}
            className={`absolute w-14 h-14 rounded-full  animate-orbit overflow-hidden border-2  ${dot.bg}`}
            style={{
              top: dot.top,
              left: dot.left,
              transform: "translate(-50%, -50%)",
            }}
          >
            <Image
              src={dot.img}
              alt={`Dot ${i}`}
              width={56}
              height={56}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        ))}
      </div>

      {/* Text Content */}
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-[#043873]">
          Work{" "}
          <span className="relative inline-block">
            together
            <span className="absolute left-0 bottom-0 w-full h-2 bg-yellow-300 -z-10 rounded-full"></span>
          </span>
        </h2>
        <p className="text-[#043873] my-8">
          With whitespace, share your notes with your colleagues and collaborate
          on them. You can also publish a note to the internet and share the URL
          with others.
        </p>
        <Button className="bg-[#4F9CF9] hover:bg-[#6eb4fc] text-white hover:text-black">
          Try it now →
        </Button>
      </div>
    </section>
  );
}
