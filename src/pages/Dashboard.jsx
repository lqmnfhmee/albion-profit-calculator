import { useNavigate } from "react-router-dom";
import { useWallet } from "../context/WalletContext";

function Dashboard() {
  const navigate = useNavigate();
  const { getSilverBalance, getWeeklyChange, goldBalance } = useWallet();

  const silverBalance = getSilverBalance();
  const weeklyChange = getWeeklyChange();

  const fmt = (n) =>
    n.toLocaleString("en-US", { maximumFractionDigits: 0 });

  const weeklySign = weeklyChange >= 0 ? "+" : "";
  const weeklyArrow = weeklyChange >= 0 ? "↑" : "↓";
  const weeklyColor = weeklyChange >= 0 ? "text-green-600" : "text-red-600";

  return (
    <div className="p-8">
      {/* ── Dashboard Header ─────────────────────────────────────────── */}
      <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        {/* Left — Silver Balance */}
        <div>
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-1">
            Total Silver Balance
          </p>
          <p className="text-4xl font-bold text-gray-900 leading-none">
            {fmt(silverBalance)}
          </p>
          <p className={`mt-2 text-base font-semibold ${weeklyColor}`}>
            {weeklySign}
            {fmt(weeklyChange)} this week {weeklyArrow}
          </p>
        </div>

        {/* Right — Gold Balance badge (clickable → /gold) */}
        <button
          id="gold-balance-btn"
          onClick={() => navigate("/gold")}
          className="flex items-center gap-2 bg-yellow-50 border border-yellow-300 rounded-xl px-5 py-3 hover:bg-yellow-100 transition-colors self-start sm:self-auto"
          title="Open Gold Exchange"
        >
          <span className="text-2xl">🪙</span>
          <div className="text-left">
            <p className="text-xs text-yellow-700 font-semibold uppercase tracking-wide">
              Gold
            </p>
            <p className="text-xl font-bold text-yellow-800 leading-none">
              {fmt(goldBalance)}
            </p>
          </div>
        </button>
      </div>

      {/* ── Quick Links ──────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            🌾 Food Production Calculator
          </h2>
          <p className="text-gray-500 text-sm">
            Calculate farming costs, crafting expenses, and profit margins for
            your Albion food production runs.
          </p>
          <a
            href="/production"
            className="inline-block mt-4 px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg text-sm hover:bg-yellow-300 transition-colors"
          >
            Open Calculator →
          </a>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            📒 Transactions
          </h2>
          <p className="text-gray-500 text-sm">
            Log and track your in-game income and expenses to monitor your
            overall economy over time.
          </p>
          <a
            href="/transactions"
            className="inline-block mt-4 px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg text-sm hover:bg-yellow-300 transition-colors"
          >
            View Transactions →
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
