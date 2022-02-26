import { useStats } from "../hooks/useTransactions";

export const Stats = () => {
  const { expenses, income, balance } = useStats();
  return (
    <>
      <div className="px-8 py-2">
        <h4 className="text-lg text-gray-500 font-thin">Your Balance</h4>
        <h4 className="text-2xl font-semibold">{balance} €</h4>
      </div>
      <div className="flex space-x-2 my-2 px-6">
        <div className="bg-green-600 p-4 rounded shadow-md w-full text-white text-center">
          <h1 className="text-xl font-light">Income</h1>
          <h1 className="text-2xl font-semibold">{income} €</h1>
        </div>
        <div className="bg-red-600 p-4 rounded shadow-md  w-full text-white text-center">
          <h1 className="text-xl font-light">Expenses</h1>
          <h1 className="text-2xl font-semibold">{expenses} €</h1>
        </div>
      </div>
    </>
  );
};
