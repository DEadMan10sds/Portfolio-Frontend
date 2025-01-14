import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import cardTitles from "../../texts/card.json";
import "./profile.css";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";

const Profile = ({ profileData }) => {
  const { t } = useTranslation();
  return (
    <Card className="text-left w-full border-0 animated-border">
      <CardHeader>
        <div className="flex items-center md:items-start gap-3 md:gap-6 ">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div className="w-40 md:w-max">
            <CardTitle>
              <div className="card-header">{profileData.name}</div>
            </CardTitle>
            <CardDescription>
              <span className="card-description">{t(profileData.career)}</span>
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          <Label htmlFor="description">{cardTitles.descriptionTitle}</Label>
          <div id="description" className="mb-3">
            {profileData.description}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Profile;
