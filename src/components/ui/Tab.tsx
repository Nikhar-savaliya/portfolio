import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface TabProps {
  text: string;
  link: string;
  icon: LucideIcon;
  selected: boolean;
}

const Tab = (props: TabProps) => {
  const { link, selected, text } = props;

  return (
    <Link
      href={link}
      className={`${
        selected
          ? "text-primary-foreground"
          : "text-muted-foreground hover:text-primary"
      } relative rounded-md px-2 py-1 text-sm font-medium transition-colors`}
    >
      <span className="relative z-10 flex items-center gap-1.5">
        <props.icon width={16} className="max-[400px]:hidden" /> {text}
      </span>

      {selected && (
        <motion.span
          layoutId="tab"
          transition={{ type: "spring", duration: 0.4 }}
          className="absolute inset-0 z-0 rounded-md bg-primary"
        ></motion.span>
      )}
    </Link>
  );
};

export default Tab;
