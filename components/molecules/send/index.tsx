import { Send as SendIcon, SendOutlined } from "@mui/icons-material";
import Link from "next/link";
import { NavItemProps } from "../../../interfaces";

interface SendProps extends NavItemProps {}

const Send = ({ active }: SendProps) => {
  const Icon = active ? SendIcon : SendOutlined;
  return (
    // eslint-disable-next-line @next/next/link-passhref
    <Link href="/inbox">
      <Icon className="cursor-pointer" fontSize="large" />
    </Link>
  );
};

export default Send;
