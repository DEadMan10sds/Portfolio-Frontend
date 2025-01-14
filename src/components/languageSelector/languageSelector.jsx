import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import i18n from "@/i18n";
import { SelectGroup } from "@radix-ui/react-select";
import NavbarData from "../../texts/navbar.json";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { t } = useTranslation();

  function changeLanguage(data) {
    i18n.changeLanguage(data);
  }

  return (
    <Select onValueChange={changeLanguage} defaultValue={i18n.language}>
      <SelectTrigger className="w-[100px]">
        <SelectValue placeholder="Idioma" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {NavbarData.languages.map((language) => (
            <SelectItem value={language} key={language}>
              {t(`languages.${language}`)}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;
