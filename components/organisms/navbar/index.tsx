import Image from "next/image";
import SearchBar from "../../molecules/search-bar";
import NavItems from "../nav-items";

const NavBar = () => {
  return (
    <nav className="flex w-full h-20 p-6 justify-between md:justify-around items-center bg-white border-2 border-gray-200">
      <div className="flex w-full lg:w-3/4 2xl:w-1/2 h-full justify-between">
        <Image
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          height={29}
          width={103}
          alt="logo"
        />
        <SearchBar className="hidden md:flex"></SearchBar>
        <NavItems></NavItems>
      </div>
    </nav>
  );
};

export default NavBar;
