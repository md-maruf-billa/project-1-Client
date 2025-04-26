import IconBox from "@/components/IconBox/IconBox";
import { Button } from "@/components/ui/button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Database, KeyRound, Lock, ShieldCheck } from "lucide-react";
import Image from "next/image";

const DataPrivacy = () => {
  return (
    <section className="bg-white  py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Text Section */}
      <div className="space-y-6  ">
        <h2 className="text-4xl md:text-5xl font-bold text-[#043873] leading-snug">
          100%{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-[#043873]">your data</span>
            <span className="absolute inset-x-0 bottom-0 h-3 bg-[#FFE492] z-0 rounded-md"></span>
          </span>
        </h2>

        <p className="text-gray-600 mb-6">
          The app is open source and your notes are saved to an open format, so
          you&apos;ll always have access to them. Uses End-To-End Encryption
          (E2EE) to secure your notes and ensure no one but yourself can access
          them.
        </p>
        <Button
          variant="outline"
          className="bg-[#4F9CF9] hover:bg-[#6eb4fc] text-white transition duration-300"
        >
          Read more
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </div>

      {/* Icon Arc Network */}
      <div className="relative w-full  aspect-square">
        {/* Center logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border-2 border-dashed border-blue-400 rounded-xl flex items-center justify-center bg-white shadow-md">
            <Image
              src="/logo.png"
              alt="Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </div>
        </div>

        {/* Semi-circle arc (visual dashed border for effect) */}
        <div className="absolute top-[75%] left-[75%]  -translate-x-1/2 -translate-y-1/2  z-0" />

        {/* Icons in top 180° arc */}
        <div className="absolute top-[0%] left-[40%] -translate-x-[180%]">
          <IconBox icon={<KeyRound className="text-blue-500" />} />
        </div>
        <div className="absolute top-[50%] left-0 -translate-y-1/2">
          <IconBox icon={<Database className="text-yellow-500" />} />
        </div>
        <div className="absolute top-[50%] right-0 -translate-y-1/2">
          <IconBox icon={<Lock className="text-blue-500" />} />
        </div>
        <div className="absolute top-[0%] right-[40%] translate-x-[180%]">
          <IconBox icon={<ShieldCheck className="text-yellow-500" />} />
        </div>
      </div>
    </section>
  );
};

export default DataPrivacy;
