import Image from "next/image";

const Sponsors = () => {
  return (
    <section className="my-20  px-4  ">
      <div className="container mx-auto text-center">
        {/* Title Graphic */}
        <div className="mb-12 flex justify-center">
          <Image
            src="/icons/sponsor.png"
            alt="sponsors heading"
            width={300}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Sponsor Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center px-4">
          <div className="flex justify-center">
            <Image
              src="/icons/apple.png"
              alt="Apple"
              width={40}
              height={60}
              className="object-contain  hover:grayscale grayscale-0 transition duration-300"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/icons/microsoft.png"
              alt="Microsoft"
              width={120}
              height={60}
              className="object-contain  hover:grayscale grayscale-0 transition duration-300"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/icons/slack-1.png"
              alt="Slack"
              width={120}
              height={60}
              className="object-contain  hover:grayscale grayscale-0 transition duration-300"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/icons/google.png"
              alt="Google"
              width={120}
              height={60}
              className="object-contain  hover:grayscale grayscale-0 transition duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
