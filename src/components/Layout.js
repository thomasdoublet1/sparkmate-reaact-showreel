import React from 'react';
import Header from "./Header";

const Layout = (props) => {

    const {content} = props;

    return (
        <div>
            <Header/>
            {content}
        </div>
    );
};

export default Layout;