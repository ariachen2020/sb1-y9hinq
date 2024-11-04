import React, { useState } from 'react';
import TabStrip from './components/TabStrip';
import BaziGrid from './components/BaziGrid';

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('命盤');
  const heavenlyStems = ['甲', '庚', '乙', '丙'];
  const earthlyBranches = ['申', '午', '未', '寅'];

  return (
    <div className="max-w-3xl mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <button className="text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-semibold">八字盤面</h1>
        <div className="flex gap-2">
          <button className="text-blue-500 text-xl">⟨</button>
          <button className="text-blue-500 text-xl">↻</button>
          <button className="text-blue-500 text-xl">⟩</button>
        </div>
      </div>

      {/* Main Content */}
      <TabStrip selectedTab={selectedTab} onTabChange={setSelectedTab} />
      <BaziGrid heavenlyStems={heavenlyStems} earthlyBranches={earthlyBranches} />
    </div>
  );
};

export default App;