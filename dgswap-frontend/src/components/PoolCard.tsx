import React from "react";
import { Pool } from "/home/agantem/Desktop/dgswap/dgswapSubgraphSDK/src"; // Adjust import

interface PoolCardProps {
  pool: Pool;
}

export const PoolCard: React.FC<PoolCardProps> = ({ pool }) => {
  return (
    <div className="bg-gray-800/70 backdrop-blur-md p-6 rounded-lg shadow-lg border border-gray-700/50 hover:border-teal-500 transform hover:scale-105 transition-all duration-300">
      <h3 className="text-lg font-semibold text-teal-300">
        Pool {pool.id.slice(0, 6)}...
      </h3>
      <p className="mt-2 text-gray-300">Token0: <span className="font-mono text-white">{pool.token0.slice(0, 6)}...</span></p>
      <p className="mt-1 text-gray-300">Token1: <span className="font-mono text-white">{pool.token1.slice(0, 6)}...</span></p>
      <p className="mt-1 text-gray-300">Fee: <span className="font-mono text-white">{pool.fee}</span></p>
      <p className="mt-1 text-gray-300">Tx Hash: <span className="font-mono text-white">{pool.transactionHash.slice(0, 6)}...</span></p>
    </div>
  );
};