import React from 'react';
import { Route, Routes } from "react-router-dom"
import Home from "../../pages/Home";
import Demo from "../../pages/demo/Demo";
import Layout from "../Layout";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout content={<Home />} />} />
            <Route path="/demo" element={<Layout content={<Demo />} /> } />
        </Routes>
    );
};

export default Router;