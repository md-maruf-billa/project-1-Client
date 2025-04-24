import { default as HeroBanner } from "@/components/customs/home_page/Banner";
import Extension from "@/components/customs/home_page/Extention";
import Pricing from "@/components/customs/home_page/Pricing";
import ProjectManagment from "@/components/customs/home_page/ProjectManagment";
import Working from "@/components/customs/home_page/Working";

import WorkTogether from "@/components/customs/home_page/WorkTogether";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <ProjectManagment />
      <WorkTogether />
      <Extension />
      <Pricing />
      <Working />
    </div>
  );
}
