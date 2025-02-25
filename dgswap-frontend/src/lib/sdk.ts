// import { DragonSwapSubgraphSDK } from "@PaulElisha/subgraph-dgswap";

import { DragonSwapSubgraphSDK} from "/home/agantem/Desktop/dgswap/dgswapSubgraphSDK/src";

const ENDPOINT = `https://gateway.thegraph.com/api/${import.meta.env.API_KEY}/subgraphs/id/2QEZxd4f115iTkW38MFmL6KZsq9uAYmCaFF2KLrZeSjK`;
export const sdk = new DragonSwapSubgraphSDK(ENDPOINT);