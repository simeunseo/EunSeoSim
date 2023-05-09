import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import WeatherCard from "./components/WeatherCard";
import WeatherCardPage from "./pages/WeatherCardPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path=":type">
            <Route path=":area" element={<WeatherCard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
