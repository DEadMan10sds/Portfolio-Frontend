import "./Home.css";
import { useLoaderData } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Profile } from "@/components";
import { TitleSeparator } from "@/components/titleSeparator/TitleSeparator";
import { useTranslation } from "react-i18next";
import CylinderCards from "@/components/CylinderCards/CylinderCards";
import { data } from "autoprefixer";

//const projects = [];
const projects = [
  {
    title: "Título del proyecto",
    img: "profile.jpg",
    status: true,
    description: "Loem ipsum de cada proyecto",
  },
];

const jobs = [
  {
    company: "AIA Partners",
    link: "",
    jobTitle: "Líder desarrollador backend",
    responsabilities: [""],
    description: "sdbkdenbkrjtbnrkjtbnsrktjnblksjgbldjfbnldkfjnbdkfjnbdkjgnkdj",
  },
];

function Home() {
  const profileData = useLoaderData();
  const { t } = useTranslation();

  return (
    <div className="flex max-w-[1200px]  flex-col gap-3 items-center ">
      <Profile profileData={profileData} />
      <TitleSeparator title={t("projects.title")} />
      <div className="flex flex-col items-start">
        <div className="lg:grid sm:grid-cols-1 lg:grid-cols-3 sm:gap-15 gap-8">
          {projects &&
            projects.map((project, index) => {
              console.log(project);
              return (
                <div
                  key={project.title}
                  className={`my-4 md:m-0 ${index % 2 && "col-span-2"}`}
                >
                  <Card className="text-left h-full">
                    <CardHeader>
                      <img src={project.img} />
                      <div className="w-40 md:w-full">
                        <CardTitle className="mt-2">{project.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Label htmlFor="description">
                        {t("card.descriptionTitle")}
                      </Label>
                      <p id="description" className="mb-3">
                        {project.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
        </div>
      </div>
      <TitleSeparator title={t("jobs.title")} />
      <div className="w-full h-full py-2">
        <CylinderCards />
      </div>
    </div>
  );
}

export default Home;
