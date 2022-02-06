import NavBar from "../../organisms/navbar";

const HomeTemplate = ({ children }) => {
  return (
    <div className="flex flex-col items-center w-full h-screen">
      <div className="w-full lg:w-3/4 2xl:w-1/2 px-6">
        <NavBar></NavBar>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default HomeTemplate;
