import { usePathname } from "next/navigation";

import Tab from "./ui/Tab";
import { ContactRound, NotebookText, PanelsTopLeft, User2 } from "lucide-react";

const tabs = [
  { text: "about", link: "/", icon: User2 },
  { text: "projects", link: "/projects", icon: PanelsTopLeft },
  { text: "blogs", link: "/blogs", icon: NotebookText },
  { text: "contact", link: "/contact", icon: ContactRound },
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
