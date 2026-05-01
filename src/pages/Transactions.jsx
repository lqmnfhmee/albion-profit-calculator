import { useWallet } from "../context/WalletContext";
import TransactionEntry from "../components/transactions/TransactionEntry";
import RecentTransaction from "../components/transactions/RecentTransaction";

function Transactions() {
  const { transactions, addTransaction } = useWallet();

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Transactions</h1>
        <p className="text-gray-500 mt-1">
          Log your in-game income and expenses to track your Albion economy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Add Transaction Card */}
        <div className="bg-white rounded-xl shadow p-6">
          <TransactionEntry addTransaction={addTransaction} />
        </div>

        {/* Recent Transactions Card */}
        <div className="bg-white rounded-xl shadow p-6">
          <RecentTransaction transactions={transactions} />
        </div>
      </div>
    </div>
  );
}

export default Transactions;
