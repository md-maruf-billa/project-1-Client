import { Button } from "@/components/ui/button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function ProjectManagment() {
  return (
    <section>
      <div className="container mx-auto min-h-screen flex items-center py-24 px-4 md:px-16  ">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-10 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-[#043873]">
              Project{" "}
              <span className="relative inline-block">
                Managment
                <span className="absolute left-0 bottom-0 w-full h-2 bg-yellow-300 -z-10 rounded-full"></span>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-[#043873]">
              We craft innovative and responsive web solutions to elevate your
              brand and engage your audience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Link href="/getStarted" passHref>
                <Button
                  variant="outline"
                  className="bg-[#4F9CF9] hover:bg-[#6eb4fc] text-white"
                >
                  Get Started&nbsp;
                  <FontAwesomeIcon icon={faArrowRight} />
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative md:w-1/2 max-w-[400px] aspect-square overflow-hidden shadow-xl">
            <Image
              src="/project-1.jpg"
              alt="Hero Illustration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
