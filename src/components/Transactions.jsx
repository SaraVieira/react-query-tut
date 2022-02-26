import classNames from "classnames";
import { useState } from "react";
import { useDeleteTransaction } from "../hooks/useDeleteTransaction";
import { useEditTransaction } from "../hooks/useEditTransaction";
import { useTransactions } from "../hooks/useTransactions";
import { EditIcon, XIcon } from "./Icons";

const Transaction = (transaction) => {
  const [editing, setEditing] = useState(false);
  const [amount, setAmount] = useState(transaction.amount);
  const mutation = useDeleteTransaction({
    id: transaction._id,
    onSuccess: () => setEditing(false),
  });
  const mutationEdit = useEditTransaction({ id: transaction._id });

  const deleteTransaction = () => mutation.mutate();
  const editTransaction = async (e) => {
    e.preventDefault();
    await mutationEdit.mutateAsync({
      description: transaction.description,
      amount,
    });
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
    <div className="px-8 my-6">
      <div className="my-4 border-b w-full">
        <h2 className="font-semibold text-lg">History</h2>
      </div>
      {!isLoading &&
        transactions.map((transaction) => (
          <Transaction key={transaction._id} {...transaction} />
        ))}
    </div>
  );
};
