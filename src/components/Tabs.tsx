import Tab from "./ui/Tab";
import { Home } from "lucide-react";
import { usePathname } from "next/navigation";

const tabs = [
  { text: "about", link: "/", icon: Home },
  { text: "projects", link: "/projects", icon: Home },
  { text: "blogs", link: "/blogs", icon: Home },
  { text: "contact", link: "/contact", icon: Home },
];

const ButtonShapeTabs = () => {
  const path = usePathname();
  return (
    <div className="my-8 flex flex-wrap items-center gap-2">
      {tabs.map((tab, index) => (
        <Tab
          text={tab.text}
          link={tab.link}
          icon={tab.icon}
          selected={path === tab.link}
          key={tab.text}
        />
      ))}
    </div>
  );
};

export default ButtonShapeTabs;
