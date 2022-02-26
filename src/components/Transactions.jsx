import classNames from "classnames";
import { useState } from "react";
import { useQuery } from "react-query";
import { useTransactions } from "../hooks/useTransactions";
import { EditIcon, XIcon } from "./Icons";

const Transaction = (transaction) => {
  const [editing, setEditing] = useState(false);
  const [amount, setAmount] = useState(transaction.amount);
  const deleteTransaction = () => {};
  const editTransaction = (e) => {
    e.preventDefault();
    setEditing(false);
  };

  return (
    <div
      key={transaction._id}
      class={classNames(
        "ml-6 relative bg-white p-4  shadow-sm border-[1px] border-r-8 border-slate-100 my-4 flex justify-between rounded",
        transaction.amount > 0 ? "border-r-green-500" : "border-r-red-500"
      )}
    >
      <div class="absolute -left-6">
        <button
          onClick={deleteTransaction}
          class="cursor-pointer bg-red-600 w-6 flex items-center text-white justify-center h-[30px] rounded-l"
        >
          <XIcon />
        </button>
      </div>
      <div>
        <p>{transaction.description}</p>
      </div>
      <div className="flex gap-2 ">
        {editing ? (
          <form onSubmit={editTransaction}>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
            />
          </form>
        ) : (
          <p>
            {transaction.amount > 0 && "+"}
            {transaction.amount} €
          </p>
        )}
        <button onClick={() => setEditing(true)}>
          <EditIcon />
        </button>
      </div>
    </div>
  );
};

export const Transactions = () => {
  const { transactions, isLoading } = useTransactions();

  return (
    <div class="px-8 my-6">
      <div class="my-4 border-b w-full">
        <h2 class="font-semibold text-lg">History</h2>
      </div>
      {!isLoading &&
        transactions.map((transaction) => <Transaction {...transaction} />)}
    </div>
  );
};
