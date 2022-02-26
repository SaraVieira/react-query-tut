import { useState } from "react";
import { useCreateTransaction } from "../hooks/useCreateTransaction";

export const AddNew = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState();
  const mutation = useCreateTransaction({
    onSuccess: () => {
      setDescription("");
      setAmount("");
    },
  });

  const addTransaction = async (e) => {
    e.preventDefault();
    await mutation.mutateAsync({ amount, description });
  };

  return (
    <div className="px-8 my-6">
      <div className="my-4 border-b w-full">
        <h2 className="font-semibold text-lg">Add new transaction</h2>
      </div>
      <div className="bg-white rounded-md">
        <form className="mt-4" onSubmit={addTransaction}>
          <div className="my-5 text-sm">
            <label htmlFor="description" className="block text-black">
              Description
            </label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="description"
              required
              className="rounded-sm px-4 py-3 mt-1 focus:outline-none bg-gray-100 w-full"
              placeholder="Enter Description"
            />
          </div>
          <div className="my-5 text-sm">
            <label htmlFor="amount" className="block text-black">
              Amount
              <small className="text-gray-600">
                {" "}
                (<span className="text-red-400"> negative-expense</span> ,
                <span className="text-green-400"> positive-income</span>)
              </small>
            </label>
            <input
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              type="number"
              required
              className="rounded-sm px-4 py-3 mt-1 focus:outline-none bg-gray-100 w-full"
              placeholder="Enter Amount"
            />
          </div>
          <div className="my-5">
            <button
              disabled={mutation.isLoading}
              type="submit"
              className="rounded-sm block text-center text-white bg-gray-800 p-3 duration-300  hover:bg-black w-full"
            >
              Add Transaction
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
