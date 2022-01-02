import { HomeOutlined, HomeRounded } from "@mui/icons-material";
import Link from "next/link";
import { NavItemProps } from "../../../interfaces";

interface HomeProps extends NavItemProps {}

const Home = ({ active }: HomeProps) => {
  const Icon = active ? HomeRounded : HomeOutlined;
  return (
    // eslint-disable-next-line @next/next/link-passhref
    <Link href="/">
      <Icon className="cursor-pointer bg-white" fontSize="large" />
    </Link>
  );
};

export default Home;
