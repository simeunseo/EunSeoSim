import Cards from "../components/Cards";
import { GlobalContextProvider } from "../context/context";
import Header from "../components/Header";

const Main = () => {
  return (
    <GlobalContextProvider>
      <Header />
      <Cards />
    </GlobalContextProvider>
  );
};

export default Main;
