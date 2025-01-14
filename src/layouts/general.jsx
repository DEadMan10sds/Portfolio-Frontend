import { Navbar } from "@/components";
import { Meteors } from "@/components/MeteorLanguages.jsx";
import { Stars } from "@/components/Stars.jsx";
import { Outlet } from "react-router-dom";

const GeneralLayout = () => {
  return (
    <main className="min-h-screen relative px-4 pb-20 before:bg-gradient-to-b before:from-[#020617] before:via-[#020617] before:-z-10 before:inset-0 before:to-[#000c3b] before:size-full before:absolute border-b inset-0 m-auto">
      <Meteors />
      <Stars />
      <div className="lg:flex lg:flex-col lg:items-center ">
        <Navbar />
        <div className="max-w-[1400px]">
          <div className="p-6 lg:py-8 md:py-0 ">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default GeneralLayout;
