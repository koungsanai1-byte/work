import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import List from "./list";
const Router = () => {
    return (
        <BrowserRouter basename="/work/">
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/list" element={<List />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router