import { Outlet } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import SearchForm from "../components/SearchForm";
import WeaderCard from "../components/WeaderCard";
import { useState } from "react";
const Main = () => {
  const [area, setArea] = useState();

  return (
    <PageLayout>
      <SearchForm area={area} setArea={setArea} />
      <WeaderCard area={area} />
      <Outlet />
    </PageLayout>
  );
};

export default Main;
