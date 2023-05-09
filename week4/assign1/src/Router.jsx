import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import WeaderCard from "./components/WeaderCard";
import WeaderCardPage from "./pages/WeaderCardPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/day" element={<WeaderCardPage />}>
          <Route path=":area" element={<WeaderCard />} />
        </Route>
        <Route path="/week" element={<WeaderCardPage />}>
          <Route path=":area" element={<WeaderCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
