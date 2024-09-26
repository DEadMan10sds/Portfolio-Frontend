//Icon for navbar
const NavbarIcon = ({ forButton = false, icon }) => {
  const classes = `${forButton ? "rounded-full" : "rounded-full w-8 h-8"}`;

  return (
    <a
      href="#"
      className="flex items-center aling-middle gap-2 text-lg font-semibold md:text-base"
    >
      <img src={icon} className={classes} />
      <span className="sr-only">Acme Inc</span>
    </a>
  );
};

export default NavbarIcon;
