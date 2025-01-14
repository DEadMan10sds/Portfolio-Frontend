import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

//Styles
const LinkClassesDesktop =
  "text-muted-foreground hover:text-foreground flex  items-center justify-middle gap-1";
const LinkClassesMobile =
  "text-muted-foreground transition-colors hover:text-foreground";

//Links dynamically created
const NavBarLinks = ({ desktopLinks = false, icon = false, content = [] }) => {
  const { t } = useTranslation();

  return content.map((item) => (
    <Link
      key={item.text + `${desktopLinks && "Desktop"}`}
      to={item.link}
      className={desktopLinks ? LinkClassesDesktop : LinkClassesMobile}
    >
      {t(item.text)}
      {icon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m16.289 7.208l-9.766 9.746q-.14.14-.344.13q-.204-.009-.345-.15t-.14-.334t.14-.334L15.582 6.5H6.789q-.213 0-.357-.144t-.143-.357t.143-.356t.357-.143h9.692q.343 0 .575.232t.233.576V16q0 .213-.145.356t-.356.144t-.356-.144t-.144-.356z"
          />
        </svg>
      )}
    </Link>
  ));
};

export default NavBarLinks;
