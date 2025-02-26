import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-900/80 backdrop-blur-md sticky top-0 z-10 border-b border-gray-800">
      <div className=" items-center">
        <h1 className="section">
          DragonSwap On Kaia 
        </h1>
        <nav>
          <a href="https://thegraph.com/explorer/subgraphs/DFu3UKnkVWq4xgYq5NFerMu6puA9SkqdMyjjWmauwqqM?view=Query&chain=arbitrum-one" 
             className="text-gray-300 hover:text-indigo-400 transition-colors">
            Subgraph
          </a>
        </nav>
      </div>
    </header>
  );
};