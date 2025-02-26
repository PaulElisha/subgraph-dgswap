// import React from "react";
// // import { Factory } from "@PaulElisha/subgraph-dgswap";

// import { Factory } from "/home/agantem/Desktop/dgswap/dgswapSubgraphSDK/src";

// import { formatUSD } from "../utils/format";

// interface FactoryCardProps {
//   factory: Factory;
// }

// export const FactoryCard: React.FC<FactoryCardProps> = ({ factory }) => {
//   return (
//     <div className="bg-gray-800/70 backdrop-blur-md p-6 rounded-lg shadow-lg border border-gray-700/50 hover:border-indigo-500 transform hover:scale-105 transition-all duration-300">
//       <h3 className="text-lg font-semibold text-indigo-300">
//         Factory {factory.id.slice(0, 6)}...
//       </h3>
//       <p className="mt-2 text-gray-300">Pool Count: <span className="font-mono text-white">{factory.poolCount}</span></p>
//       <p className="mt-1 text-gray-300">Tx Count: <span className="font-mono text-white">{factory.txCount}</span></p>
//       <p className="mt-1 text-gray-300">
//         Total Volume USD: <span className="font-mono text-white">{formatUSD(factory.totalVolumeUSD)}</span>
//       </p>
//     </div>
//   );
// };

import React from "react";
import { Factory } from "/home/agantem/Desktop/dgswap/dgswapSubgraphSDK/src"; // Adjust import
import { formatUSD } from "../utils/format";

interface FactoryCardProps {
  factory: Factory;
}

export const FactoryCard: React.FC<FactoryCardProps> = ({ factory }) => {
  return (
    <div className="bg-[#2d3748] p-4 sm:p-5 rounded-md transition-all duration-200 hover:bg-[#2d3748]/80">
      <h3 className="text-base sm:text-lg font-medium text-[#4f46e5]">
        Factory {factory.id.slice(0, 6)}...
      </h3>
      <p className="mt-2 text-sm text-[#9ca3af]">
        Pools: <span className="text-[#f1f5f9] font-medium">{factory.poolCount}</span>
      </p>
      <p className="mt-1 text-sm text-[#9ca3af]">
        Tx: <span className="text-[#f1f5f9] font-medium">{factory.txCount}</span>
      </p>
      <p className="mt-1 text-sm text-[#9ca3af]">
        Volume: <span className="text-[#f1f5f9] font-medium">{formatUSD(factory.totalVolumeUSD)}</span>
      </p>
    </div>
  );
};