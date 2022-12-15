import React from 'react';
import Button from "../components/Button";
import {NavLink} from "react-router-dom";

const Home = () => {
    return (
        <div className={"hero"}>
            <h1>REACT</h1>
            <h2>Showreel</h2>
            <NavLink to={"/demo"}><Button onClick={""} variant="primary" title={"Let's Go"}/></NavLink>
        </div>
    );
};

export default Home;