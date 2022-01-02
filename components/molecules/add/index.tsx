import { AddCircleSharp, AddCircleOutlineSharp } from "@mui/icons-material";
import { NavItemProps } from "../../../interfaces";

interface AddProps extends NavItemProps {}

const Add = ({ active }: AddProps) => {
  const Icon = active ? AddCircleSharp : AddCircleOutlineSharp;
  return <Icon className="cursor-pointer" fontSize="large" />;
};

export default Add;
