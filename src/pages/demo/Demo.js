import React, {useState} from 'react';
import Tabs from "../../components/Tabs";
import VariantSelector from "./variantSelector";
import StoreDemo from "./storeDemo";

const tabs = [
    {
        title: "🧩 Component Selector",
        content:<VariantSelector/>
    },
    {
        title: "💽 Redux Store",
        content:<StoreDemo/>
    }
];

const Demo = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(1);

    return (
        <div className={"container"}>
            <Tabs tabs={tabs} activeTabIndex={activeTabIndex} setActiveTabIndex={setActiveTabIndex} />
            <div className={"main-content"}>
                {tabs[activeTabIndex].content}
            </div>
        </div>
    );
};

export default Demo;