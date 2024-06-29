import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hmm from "../hmm/Hmm";

const Router: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard/2" element={<Hmm />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
