import { FavoriteBorderOutlined, Favorite } from "@mui/icons-material";
import { NavItemProps } from "../../../interfaces";

interface NotifsProps extends NavItemProps {}

const Notifs = ({ active }: NotifsProps) => {
  const Icon = active ? Favorite : FavoriteBorderOutlined;
  return <Icon className="cursor-pointer" fontSize="large" />;
};

export default Notifs;
