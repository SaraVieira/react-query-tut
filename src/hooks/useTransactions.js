import { useEffect, useState } from "react";
import { useQuery } from "react-query";

export const useTransactions = () => {
  const { data: transactions, isLoading } = useQuery(["transactions"], () =>
    fetch("https://legitbackend.wtf/box_80b4b81c19b8cd6b1155").then((rsp) =>
      rsp.json()
    )
  );

  return {
    transactions,
    isLoading,
  };
};

export const useStats = () => {
  const emptyStats = {
    expenses: 0,
    balance: 0,
    income: 0,
  };
  const { transactions } = useTransactions();
  const [stats, setStats] = useState(emptyStats);

  useEffect(() => {
    if (transactions) {
      const divided = transactions.reduce((acc, curr) => {
        if (curr.amount > 0) {
          acc.income += curr.amount;
        } else {
          acc.expenses += curr.amount;
        }

        acc.balance += curr.amount;

        return acc;
      }, emptyStats);
      setStats(divided);
    }
  }, [transactions]);

  return stats;
};
