import Image from "next/image";
import SearchBar from "../../molecules/search-bar";
import NavItems from "../nav-items";

const NavBar = () => {
  return (
    <nav className="flex w-full h-20 p-6 justify-around items-center gap-12">
      <div className="flex w-5/6 h-full justify-around">
        <Image
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          height={29}
          width={103}
          alt="logo"
        />
        <SearchBar></SearchBar>
        <NavItems></NavItems>
      </div>
    </nav>
  );
};

export default NavBar;
