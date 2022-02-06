import Image from "next/image";
import SearchBar from "../../molecules/search-bar";
import NavItems from "../nav-items";

const NavBar = () => {
  return (
    <nav className="flex w-full h-full justify-between py-6">
      <Image
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        height={29}
        width={103}
        alt="logo"
      />
      <SearchBar className="hidden md:flex"></SearchBar>
      <NavItems></NavItems>
    </nav>
  );
};

export default NavBar;
