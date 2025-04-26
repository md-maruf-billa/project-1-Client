import { default as HeroBanner } from "@/components/customs/home_page/Banner";
import DataPrivacy from "@/components/customs/home_page/DataPrivacy";
import Extension from "@/components/customs/home_page/Extention";
import Integration from "@/components/customs/home_page/Integration";
import Pricing from "@/components/customs/home_page/Pricing";
import ProjectManagment from "@/components/customs/home_page/ProjectManagment";
import Sponsors from "@/components/customs/home_page/Sponsors";
import Testimonials from "@/components/customs/home_page/Testimonials";
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
      <DataPrivacy />
      <Integration />
      <Sponsors />
      <Testimonials />
    </div>
  );
}
