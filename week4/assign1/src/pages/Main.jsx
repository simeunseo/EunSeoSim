import { Outlet } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import SearchForm from "../components/SearchForm";
import WeaderCard from "../components/WeaderCard";

const Main = () => {
  return (
    <PageLayout>
      <SearchForm />
      <Outlet />
    </PageLayout>
  );
};

export default Main;
