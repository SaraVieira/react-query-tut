export const AddNew = () => {
  const addTransaction = (e) => {
    e.preventDefault();
  };

  return (
    <div class="px-8 my-6">
      <div class="my-4 border-b w-full">
        <h2 class="font-semibold text-lg">Add new transaction</h2>
      </div>
      <div class="bg-white rounded-md">
        <form class="mt-4" onSubmit={addTransaction}>
          <div class="my-5 text-sm">
            <label htmlFor="text" class="block text-black">
              Description
            </label>
            <input
              type="text"
              autoFocus
              class="rounded-sm px-4 py-3 mt-1 focus:outline-none bg-gray-100 w-full"
              placeholder="Enter Text"
            />
          </div>
          <div class="my-5 text-sm">
            <label htmlFor="amount" class="block text-black">
              Amount
              <small class="text-gray-600">
                {" "}
                (<span class="text-red-400"> negative-expense</span> ,
                <span class="text-green-400"> positive-income</span>)
              </small>
            </label>
            <input
              type="number"
              autoFocus
              class="rounded-sm px-4 py-3 mt-1 focus:outline-none bg-gray-100 w-full"
              placeholder="Enter Amount"
            />
          </div>
          <div class="my-5">
            <button class="rounded-sm block text-center text-white bg-gray-800 p-3 duration-300  hover:bg-black w-full">
              Add Transaction
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
