import { Outlet } from "react-router-dom";
import PageLayout from "../components/PageLayout";

const WeatherCardPage = () => {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
};

export default WeatherCardPage;
