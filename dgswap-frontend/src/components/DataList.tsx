import React from "react";
import { FactoryCard } from "./FactoryCard";
import { PoolCard } from "./PoolCard";
import { Factory, Pool } from "/home/agantem/Desktop/dgswap/dgswapSubgraphSDK/src"; // Adjust import

interface DataListProps {
  factories: Factory[];
  pools: Pool[];
  loading: boolean;
  error: string | null;
}

export const DataList: React.FC<DataListProps> = ({ factories, pools, loading, error }) => {
  if (loading) return <p className="text-center text-gray-400">Loading data...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  if (factories.length > 0) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {factories.map((factory) => (
          <FactoryCard key={factory.id} factory={factory} />
        ))}
      </div>
    );
  }

  if (pools.length > 0) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pools.map((pool) => (
          <PoolCard key={pool.id} pool={pool} />
        ))}
      </div>
    );
  }

  return <p className="text-center text-gray-400">No data to display.</p>;
};