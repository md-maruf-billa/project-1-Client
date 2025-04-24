import { Button } from "@/components/ui/button";
import Image from "next/image";
// import Element from "/Element.png";

const HeroBanner = () => {
  return (
    <section className="relative bg-[#043873] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Element.png"
          alt="Background Element"
          fill
          className="object-cover w-full h-full opacity-30"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto min-h-screen flex items-center py-24 px-4 md:px-16 z-10 relative">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-10 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl text-gray-200 lg:text-6xl font-extrabold leading-tight">
              Empower Your Digital Presence
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              We craft innovative and responsive web solutions to elevate your
              brand and engage your audience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button
                variant="outline"
                className="bg-[#4F9CF9] hover:bg-[#6eb4fc] text-white"
              >
                Try Whitepeac Free
              </Button>
              <Button className="bg-[#FFE492] text-[#043873] hover:bg-transparent hover:text-[#FFE492] border-2 border-[#FFE492]">
                Learn More
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative md:w-1/2 w-full max-w-[400px] aspect-square rounded-full overflow-hidden border-4 border-white shadow-xl">
            <Image
              src="/bannar-1.jpg"
              alt="Hero Illustration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
