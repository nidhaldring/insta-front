import NavBar from "../../organisms/navbar";

const HomeTemplate = ({ children }) => {
  return (
    <div className="flex flex-col items-center w-full h-screen bg-gray-50">
      <NavBar></NavBar>
      <div className="w-full lg:w-3/4 2xl:w-1/2 h-full p-6">{children}</div>
    </div>
  );
};

export default HomeTemplate;
