import { Separator } from "@radix-ui/react-dropdown-menu";

export const TitleSeparator = ({ title }) => {
  return (
    <div className="flex w-full gap-6">
      <Separator className="my-8 w-full brdr" />
      <div className="flex justify-center items-center ">
        <h1 className="section-title">{title}</h1>
      </div>
      <Separator className="my-8 w-full brdr" />
    </div>
  );
};
