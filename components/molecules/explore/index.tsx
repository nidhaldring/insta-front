import { Explore as ExploreIcon, ExploreOutlined } from "@mui/icons-material";
import Link from "next/link";
import { NavItemProps } from "../../../interfaces";

interface ExploreProps extends NavItemProps {}

const Explore = ({ active }: ExploreProps) => {
  const Icon = active ? ExploreIcon : ExploreOutlined;
  return (
    // eslint-disable-next-line @next/next/link-passhref
    <Link href="/explore">
      <Icon className="cursor-pointer" fontSize="large" />
    </Link>
  );
};

export default Explore;
