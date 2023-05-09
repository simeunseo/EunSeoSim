import { Outlet } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Search from "../components/Search";
import WeaderCard from "../components/WeaderCard";
const Main = () => {
  return (
    <PageLayout>
      <Search />
      <WeaderCard />
      <Outlet />
    </PageLayout>
  );
};

export default Main;
