import { Profile } from "@/components";
import { useLoaderData } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import cardTitles from "../texts/card.json";
import { Label } from "@/components/ui/label";

const projects = [8, 4, 6, 7, 2, 22, 3, 45, 436, 5];

function Home() {
  const profileData = useLoaderData();
  return (
    <div className="flex max-w-[1200px] flex-col gap-3 items-center ">
      <Profile profileData={profileData} />
      <div className="flex flex-col items-start">
        <h1 className="text-left">Historial laboral</h1>
        <div className="lg:grid sm:grid-cols-1 lg:grid-cols-3 sm:gap-15 gap-12">
          {projects.map((project) => {
            return (
              <div
                key={project}
                className={`my-4 md:m-0 ${project % 2 && "col-span-2"}`}
              >
                <Card className="text-left h-full">
                  <CardHeader>
                    <div className="w-40 md:w-max">
                      <CardTitle>{profileData.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      <Label htmlFor="description">
                        {cardTitles.descriptionTitle}
                      </Label>
                      <p id="description" className="mb-3">
                        {profileData.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
