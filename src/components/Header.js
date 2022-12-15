import React from 'react';


const imageUrl = "https://uploads-ssl.webflow.com/624abfd0aa25d61251e243e2/624abfd0aa25d6191fe24413_Sparkmate%20Logotype.svg"

const Header = () => {

    return (
        <div className={'header'}>
            <h1>THOMAS DOUBLET</h1>
            <h1>x</h1>
            <a target={"_blank"} href={"https://www.sparkmate.co/"}><img alt="Sparkmate Logo" src={imageUrl}/></a>
        </div>
    );
};

export default Header;