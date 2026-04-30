function Dashboard() {
  const stats = [
    { label: "Total Transactions", value: "—", icon: "📋", color: "text-blue-600" },
    { label: "Total Income", value: "—", icon: "💰", color: "text-green-600" },
    { label: "Total Expenses", value: "—", icon: "📉", color: "text-red-500" },
    { label: "Net Worth", value: "—", icon: "⚔️", color: "text-yellow-600" },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Total Net Worth</h1>
        <p className="text-gray-500 mt-1">
          Welcome to your Albion Online Economy Planner dashboard.
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map(({ label, value, icon, color }) => (
          <div
            key={label}
            className="bg-white rounded-xl shadow p-6 flex flex-col gap-2"
          >
            <div className="text-2xl">{icon}</div>
            <p className="text-sm text-gray-500">{label}</p>
            <p className={`text-2xl font-bold ${color}`}>{value}</p>
          </div>
        ))}
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            🌾 Production Planner
          </h2>
          <p className="text-gray-500 text-sm">
            Calculate farming costs, crafting expenses, and profit margins for
            your Albion food production runs.
          </p>
          <a
            href="/production"
            className="inline-block mt-4 px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg text-sm hover:bg-yellow-300 transition-colors"
          >
            Open Planner →
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
