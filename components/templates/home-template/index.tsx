import NavBar from "../../organisms/navbar";

const HomeTemplate = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-screen">
      <NavBar></NavBar>
      <div>{children}</div>
    </div>
  );
};

export default HomeTemplate;
