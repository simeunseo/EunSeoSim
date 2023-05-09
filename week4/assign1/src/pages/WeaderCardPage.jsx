import { Outlet } from "react-router-dom";
import PageLayout from "../components/PageLayout";

const WeaderCardPage = () => {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
};

export default WeaderCardPage;
