import { useState } from "react";
import { useWallet } from "../context/WalletContext";

/* ── Helper: formatted number input ─────────────────────────────────── */
function NumInput({ id, label, value, onChange, placeholder }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-gray-600">
        {label}
      </label>
      <input
        id={id}
        type="number"
        min="0"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? "0"}
        className="border border-gray-200 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
      />
    </div>
  );
}

/* ── Warning / success banner ────────────────────────────────────────── */
function Banner({ msg, ok }) {
  if (!msg) return null;
  return (
    <div
      className={`mt-3 text-sm font-medium px-4 py-2 rounded-lg ${
        ok
          ? "bg-green-50 text-green-700 border border-green-200"
          : "bg-red-50 text-red-700 border border-red-200"
      }`}
    >
      {msg}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════ */
function GoldExchange() {
  const { goldBalance, setGoldBalance, getSilverBalance, buyGold, buySilver } =
    useWallet();

  const silverBalance = getSilverBalance();
  const fmt = (n) => Number(n).toLocaleString("en-US", { maximumFractionDigits: 0 });

  /* ── Card 1 state — Update Gold Owned ─────────────────────────────── */
  const [newGold, setNewGold] = useState("");
  const [card1Msg, setCard1Msg] = useState(null);

  const handleUpdateGold = () => {
    const val = Number(newGold);
    if (isNaN(val) || val < 0) {
      setCard1Msg({ text: "Please enter a valid gold amount.", ok: false });
      return;
    }
    setGoldBalance(val);
    setNewGold("");
    setCard1Msg({ text: `Gold balance updated to ${fmt(val)}.`, ok: true });
  };

  /* ── Card 2 state — Buy Gold with Silver ──────────────────────────── */
  const [c2Price, setC2Price] = useState("");
  const [c2Silver, setC2Silver] = useState("");
  const [card2Msg, setCard2Msg] = useState(null);

  const handleBuyGold = () => {
    const price = Number(c2Price);
    const silver = Number(c2Silver);
    if (!price || price <= 0) {
      setCard2Msg({ text: "Enter a valid gold price.", ok: false });
      return;
    }
    if (!silver || silver <= 0) {
      setCard2Msg({ text: "Enter a valid silver amount.", ok: false });
      return;
    }
    const result = buyGold({ goldPrice: price, silverAmount: silver });
    if (result.success) {
      const goldGot = Math.floor(silver / price);
      setCard2Msg({ text: `✓ Converted ${fmt(silver)} silver → ${fmt(goldGot)} gold.`, ok: true });
      setC2Price("");
      setC2Silver("");
    } else {
      setCard2Msg({ text: result.message, ok: false });
    }
  };

  /* ── Card 3 state — Buy Silver with Gold ──────────────────────────── */
  const [c3Price, setC3Price] = useState("");
  const [c3Gold, setC3Gold] = useState("");
  const [card3Msg, setCard3Msg] = useState(null);

  const handleBuySilver = () => {
    const price = Number(c3Price);
    const gold = Number(c3Gold);
    if (!price || price <= 0) {
      setCard3Msg({ text: "Enter a valid gold price.", ok: false });
      return;
    }
    if (!gold || gold <= 0) {
      setCard3Msg({ text: "Enter a valid gold amount.", ok: false });
      return;
    }
    const result = buySilver({ goldPrice: price, goldAmount: gold });
    if (result.success) {
      const silverGot = gold * price;
      setCard3Msg({ text: `✓ Converted ${fmt(gold)} gold → ${fmt(silverGot)} silver.`, ok: true });
      setC3Price("");
      setC3Gold("");
    } else {
      setCard3Msg({ text: result.message, ok: false });
    }
  };

  /* ── Render ────────────────────────────────────────────────────────── */
  return (
    <div className="p-8">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">🪙 Gold Exchange</h1>
        <p className="text-gray-500 mt-1">
          Manage your gold balance and convert between silver and gold.
        </p>
      </div>

      {/* Balance Summary Bar */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-6 py-4 flex items-center gap-3">
          <span className="text-2xl">🪙</span>
          <div>
            <p className="text-xs text-yellow-700 font-semibold uppercase tracking-wide">Gold Balance</p>
            <p className="text-2xl font-bold text-yellow-800">{fmt(goldBalance)}</p>
          </div>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 flex items-center gap-3">
          <span className="text-2xl">💰</span>
          <div>
            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Silver Balance</p>
            <p className="text-2xl font-bold text-gray-800">{fmt(silverBalance)}</p>
          </div>
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* ── Card 1 — Update Gold Owned ─────────────────────────────── */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
          <div>
            <h2 className="text-lg font-bold text-gray-800">Update Gold Owned</h2>
            <p className="text-sm text-gray-500 mt-1">
              Manually set your current gold amount.
            </p>
          </div>
          <NumInput
            id="update-gold-input"
            label="Current Gold Owned"
            value={newGold}
            onChange={setNewGold}
            placeholder="e.g. 150"
          />
          <button
            id="update-gold-btn"
            onClick={handleUpdateGold}
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold py-2 rounded-lg transition-colors"
          >
            Update
          </button>
          <Banner msg={card1Msg?.text} ok={card1Msg?.ok} />
        </div>

        {/* ── Card 2 — Buy Gold with Silver ──────────────────────────── */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
          <div>
            <h2 className="text-lg font-bold text-gray-800">Buy Gold with Silver</h2>
            <p className="text-sm text-gray-500 mt-1">
              Convert silver into gold at the current market price.
            </p>
          </div>
          <NumInput
            id="buy-gold-price"
            label="Gold Price (silver per gold)"
            value={c2Price}
            onChange={setC2Price}
            placeholder="e.g. 4500"
          />
          <NumInput
            id="buy-gold-silver-amount"
            label="Silver to Spend"
            value={c2Silver}
            onChange={setC2Silver}
            placeholder="e.g. 200000"
          />
          {c2Price && c2Silver && Number(c2Price) > 0 && (
            <p className="text-sm text-gray-500">
              You will receive{" "}
              <span className="font-semibold text-yellow-700">
                {fmt(Math.floor(Number(c2Silver) / Number(c2Price)))} gold
              </span>
            </p>
          )}
          <button
            id="buy-gold-confirm-btn"
            onClick={handleBuyGold}
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold py-2 rounded-lg transition-colors"
          >
            Confirm Purchase
          </button>
          <Banner msg={card2Msg?.text} ok={card2Msg?.ok} />
        </div>

        {/* ── Card 3 — Buy Silver with Gold ──────────────────────────── */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
          <div>
            <h2 className="text-lg font-bold text-gray-800">Buy Silver with Gold</h2>
            <p className="text-sm text-gray-500 mt-1">
              Convert gold into silver at the current market price.
            </p>
          </div>
          <NumInput
            id="sell-gold-price"
            label="Gold Price (silver per gold)"
            value={c3Price}
            onChange={setC3Price}
            placeholder="e.g. 4500"
          />
          <NumInput
            id="sell-gold-amount"
            label="Gold to Sell"
            value={c3Gold}
            onChange={setC3Gold}
            placeholder="e.g. 12"
          />
          {c3Price && c3Gold && Number(c3Price) > 0 && (
            <p className="text-sm text-gray-500">
              You will receive{" "}
              <span className="font-semibold text-green-700">
                {fmt(Number(c3Gold) * Number(c3Price))} silver
              </span>
            </p>
          )}
          <button
            id="sell-gold-confirm-btn"
            onClick={handleBuySilver}
            className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 rounded-lg transition-colors"
          >
            Confirm Sale
          </button>
          <Banner msg={card3Msg?.text} ok={card3Msg?.ok} />
        </div>

      </div>
    </div>
  );
}

export default GoldExchange;
