import React from 'react';

interface TabStripProps {
  selectedTab: string;
  onTabChange: (tab: string) => void;
}

const TabStrip: React.FC<TabStripProps> = ({ selectedTab, onTabChange }) => {
  const tabs = ['基本', '命盤', '細盤', '大運'];

  return (
    <div className="flex bg-gray-200 p-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`flex-1 p-2 rounded-lg ${
            selectedTab === tab ? 'bg-white' : ''
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabStrip;