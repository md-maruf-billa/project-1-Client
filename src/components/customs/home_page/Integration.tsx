import { Button } from "@/components/ui/button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Integration = () => {
  return (
    <section className="bg-[#043873] text-white py-16 px-6 md:px-24 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Icons (left) */}
        <div className="relative w-[320px] h-[320px] mb-10 md:mb-0 mx-10 my-10">
          <div className="absolute top-[40%] left-[40%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
            <Image
              src="/logo.png"
              alt="Main"
              width={56}
              height={56}
              className="w-10 rounded-full"
            />
          </div>

          {[
            { src: "/icons/gmail.png", top: "0", left: "50%" },
            { src: "/icons/dropbox.png", top: "20%", left: "0" },
            { src: "/icons/outlook.png", bottom: "20%", left: "0" },
            { src: "/icons/google-calendar.png", bottom: "0", left: "50%" },
            { src: "/icons/drive.png", bottom: "20%", right: "0" },
            { src: "/icons/slack.png", top: "20%", right: "0" },
          ].map((icon, i) => (
            <div
              key={i}
              className="absolute w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg"
              style={{ ...icon, transform: "translate(-50%, -50%)" }}
            >
              <Image
                src={icon.src}
                alt={`icon-${i}`}
                width={56}
                height={56}
                className="w-8 h-8"
              />
            </div>
          ))}
        </div>

        {/* Text (right) */}
        <div className="md:ml-12 text-center md:text-left max-w-xl space-y-8">
          <h2 className="text-3xl font-bold mb-4 leading-snug">
            Work with Your Favorite Apps Using
            <span className="text-white">whitepace</span>
          </h2>
          <p className="mb-6 text-lg text-gray-200">
            Whitepace teams up with your favorite software. Integrate with over
            1000+ apps with Zapier to have all the tools you need for your
            project success.
          </p>

          <Button
            variant="outline"
            className="bg-[#4F9CF9] hover:bg-[#6eb4fc] text-white transition duration-300"
          >
            Read more
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Integration;
