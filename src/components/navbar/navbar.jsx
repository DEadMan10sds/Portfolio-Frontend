import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Button } from "@/components/ui/button";
import NavbarIcon from "./navbarIcon";
import NavbarData from "../../texts/navbar.json";
import socialLinks from "../../texts/social.json";
import logoIcon from "../../assets/logo.jpeg";
import NavBarLinks from "./NavBarLinks";

//Main component
const Navbar = () => {
  return (
    <header className="sticky top-0 -mt-2 flex h-20 align-middle justify-center w-full glass-effect">
      <nav className="hidden text-lg max-w-[1200px] w-full md:flex md:items-center justify-between">
        <div className="flex gap-6">
          <NavbarIcon icon={logoIcon} />
          <NavBarLinks desktopLinks content={NavbarData.content} />
        </div>
        <div className="flex gap-6">
          <NavBarLinks desktopLinks icon content={socialLinks.content} />
        </div>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden rounded-full my-auto"
          >
            <img src={logoIcon} className="rounded-full w-8 h-8" />
            <span className="sr-only">Acme Inc</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <VisuallyHidden.Root>
            <SheetTitle>Side Menu</SheetTitle>
            <SheetDescription>This is the side menu navbar</SheetDescription>
          </VisuallyHidden.Root>
          <nav className="grid gap-6 text-left text-lg font-medium">
            <NavbarIcon icon={logoIcon} />
            <NavBarLinks content={NavbarData.content} />
            <NavBarLinks content={socialLinks.content} icon />
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Navbar;
