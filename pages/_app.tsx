import "../styles/globals.css";
import HomeTemplate from "../components/templates/home-template";

function MyApp({ Component, pageProps }) {
  return (
    <HomeTemplate>
      <Component></Component>
    </HomeTemplate>
  );
}

export default MyApp;
