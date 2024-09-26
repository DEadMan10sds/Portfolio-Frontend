import ReactIcon from "../../assets/logo.jpeg";
import footerData from "../../texts/footer.json";

const Footer = () => {
  return (
    <footer className="flex py-4 items-center justify-between p-4">
      <img className="m-2 rounded-full" src={ReactIcon} />
      <ul className="list-none w-auto">
        {footerData.socialMedia.map((item) => {
          return (
            <li
              key={item.link}
              className="group text-right text-white transition duration-300 my-2"
            >
              <a href={item.link}>
                <p className="px-3">{item.text}</p>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-[#999999]"></span>
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
