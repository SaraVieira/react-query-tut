import classNames from "classnames";
import { useState } from "react";
import { EditIcon, XIcon } from "./Icons";

const transactions = [
  {
    _id: "hgsddgj",
    description: "Extra Money",
    amount: 400,
  },
  {
    _id: "76wghak",
    description: "Lunch",
    amount: -10,
  },
];

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
      className={classNames(
        "ml-6 relative bg-white p-4  shadow-sm border-[1px] border-r-8 border-slate-100 my-4 flex justify-between rounded",
        transaction.amount > 0 ? "border-r-green-500" : "border-r-red-500"
      )}
    >
      <div className="absolute -left-6">
        <button
          onClick={deleteTransaction}
          className="cursor-pointer bg-red-600 w-6 flex items-center text-white justify-center h-[30px] rounded-l"
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
              className="border-[1px] border-slate-300 px-3 rounded-sm"
              type="number"
              step="any"
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
  return (
    <div className="px-8 my-6">
      <div className="my-4 border-b w-full">
        <h2 className="font-semibold text-lg">History</h2>
      </div>
      {transactions.map((transaction) => (
        <Transaction key={transaction._id} {...transaction} />
      ))}
    </div>
  );
};
