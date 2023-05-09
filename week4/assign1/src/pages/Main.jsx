import { Outlet } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import SearchForm from "../components/SearchForm";
import WeaderCard from "../components/WeaderCard";
import { useState } from "react";
const Main = () => {
  return (
    <PageLayout>
      <SearchForm />
      <Outlet />
    </PageLayout>
  );
};

export default Main;
