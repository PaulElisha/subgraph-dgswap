export const formatUSD = (value: string | number): string => {
    return Number(value).toLocaleString("en-US", { style: "currency", currency: "USD" });
  };