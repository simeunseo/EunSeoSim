import { Outlet } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import SearchForm from "../components/SearchForm";
import WeatherCard from "../components/WeatherCard";

const Main = () => {
  return (
    <PageLayout>
      <SearchForm />
      <Outlet />
    </PageLayout>
  );
};

export default Main;
