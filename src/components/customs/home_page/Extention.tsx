import { Button } from "@/components/ui/button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Extension = () => {
  return (
    <section className=" bg-[#043873] overflow-hidden my-20">
      {/* Content */}
      <div className="container mx-auto min-h-screen flex items-center py-24 px-4 md:px-16 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-10 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-200">
              Use as{" "}
              <span className="relative inline-block">
                Extension
                <span className="absolute left-0 bottom-0 w-full h-2 bg-yellow-300 -z-10 rounded-full"></span>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-200">
              We craft innovative and responsive web solutions to elevate your
              brand and engage your audience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Link href="#" passHref>
                <Button
                  variant="outline"
                  className="bg-[#4F9CF9] hover:bg-[#6eb4fc] text-white transition duration-300"
                >
                  Let &apos;s Go &nbsp;
                  <FontAwesomeIcon icon={faArrowRight} />
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative md:w-1/2 aspect-[4/3] shadow-xl">
            <Image
              src="/extention-1.jpg"
              alt="Extension feature illustration"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extension;
