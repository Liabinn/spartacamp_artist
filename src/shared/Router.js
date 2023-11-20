import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "pages/Detail";
import Home from "pages/Home";
import EntireContext from 'context/EntireContext';

const Router = () => {
  return (
      <BrowserRouter>
        <EntireContext>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Detail/:memberId" element={<Detail />} />
          </Routes>
        </EntireContext>
      </BrowserRouter>
  );
};

export default Router;