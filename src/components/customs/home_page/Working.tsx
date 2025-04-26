import { Button } from "@/components/ui/button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Working = () => {
  return (
    <section className="relative bg-[#043873] my-20 py-20 px-4 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Element.png"
          alt="Background Element"
          fill
          className="object-cover w-full h-full opacity-30"
        />
      </div>

      <div className="container mx-auto flex flex-col items-center justify-center space-y-8 text-center max-w-4xl z-10 relative">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold leading-snug">
          Your work, everywhere{" "}
          <span className="relative inline-block text-white">
            you are
            <span className="absolute left-0 bottom-1 w-full h-2 bg-[#4F9CF9] -z-10 rounded-full"></span>
          </span>
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-200 px-4">
          Access your notes from your computer, phone or tablet by synchronizing
          with various services, including Whitepace, Dropbox and OneDrive. The
          app is available on Windows, macOS, Linux, Android and iOS. A terminal
          app is also available!
        </p>

        {/* CTA Button */}
        <Link href="#">
          <Button className="bg-[#4F9CF9] hover:bg-[#6eb4fc] text-white transition gap-2 hover:text-black">
            Try Taskay <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Working;
