import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import cardTitles from "../../texts/card.json";
import { Label } from "@/components/ui/label";

const Profile = ({ profileData }) => {
  return (
    <Card className="text-left w-full border-0 animated-border">
      <CardHeader>
        <div className="flex items-center md:items-start gap-3 md:gap-6 ">
          <img
            src={profileData.image}
            alt="Profile"
            className="w-20 h-20 rounded-full"
          />
          <div className="w-40 md:w-max">
            <CardTitle>{profileData.name}</CardTitle>
            <CardDescription>{profileData.introduction}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          <Label htmlFor="description">{cardTitles.descriptionTitle}</Label>
          <p id="description" className="mb-3">
            {profileData.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Profile;
