import { useState } from "react";
import { AddNew } from "./components/Add";
import { Stats } from "./components/Stats";
import { Transactions } from "./components/Transactions";

function App() {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-12 gap-0 ">
        <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
          <div>
            <div className="border-b">
              <div className="my-4 px-6">
                <h2 className="font-semibold text-2xl">Expense Tracker</h2>
              </div>
            </div>
            <Stats />
            <Transactions />
            <AddNew />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
