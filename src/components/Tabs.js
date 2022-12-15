import React from 'react';

const Tabs = (props) => {
    const {tabs, activeTabIndex, setActiveTabIndex} = props;
    return (
        <div className={"tabs"}>
            {tabs.map((tab,i)=>(
                <div key={tab.title} className={"clickable tab "+(tabs[activeTabIndex].title===tab.title && "active")} onClick={()=>setActiveTabIndex(i)} >
                    {tab.title}
                </div>
            ))}
        </div>
    );
};

export default Tabs;