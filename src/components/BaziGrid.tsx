import React from 'react';

interface BaziGridProps {
  heavenlyStems: string[];
  earthlyBranches: string[];
}

const BaziGrid: React.FC<BaziGridProps> = ({ heavenlyStems, earthlyBranches }) => {
  return (
    <div className="grid grid-cols-5 gap-0.5 m-2">
      {/* Headers */}
      {['日期', '時柱', '日柱', '月柱', '年柱'].map((header) => (
        <div key={header} className="text-center p-2 bg-gray-600 text-white">
          {header}
        </div>
      ))}

      {/* Main Stars */}
      <div className="text-center p-2 bg-gray-400">主星</div>
      <div className="text-center p-2 bg-gray-400">偏財</div>
      <div className="text-center p-2 bg-gray-400 text-red-500">元女</div>
      <div className="text-center p-2 bg-gray-400">正財</div>
      <div className="text-center p-2 bg-gray-400">七殺</div>

      {/* Heavenly Stems */}
      <div className="text-center p-2">天干</div>
      {heavenlyStems.map((stem, index) => (
        <div
          key={`stem-${index}`}
          className={`text-center p-2 text-2xl ${
            index === 1 ? 'text-orange-500' :
            index === 3 ? 'text-red-500' : 'text-green-600'
          }`}
        >
          {stem}
        </div>
      ))}

      {/* Earthly Branches */}
      <div className="text-center p-2 bg-gray-300">地支</div>
      {earthlyBranches.map((branch, index) => (
        <div
          key={`branch-${index}`}
          className={`text-center p-2 bg-gray-300 text-2xl ${
            index === 0 ? 'text-orange-500' :
            index === 1 ? 'text-red-500' :
            index === 2 ? 'text-amber-700' : 'text-green-600'
          }`}
        >
          {branch}
        </div>
      ))}
    </div>
  );
};

export default BaziGrid;