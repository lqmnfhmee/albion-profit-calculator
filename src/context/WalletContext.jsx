import { createContext, useContext, useState, useEffect } from "react";

const WalletContext = createContext(null);

export function WalletProvider({ children }) {
  // ── Transactions ──────────────────────────────────────────────────────────
  const [transactions, setTransactions] = useState(() => {
    try {
      const saved = localStorage.getItem("transactions");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // ── Gold balance (silver balance is derived from transactions) ─────────────
  const [goldBalance, setGoldBalance] = useState(() => {
    try {
      const saved = localStorage.getItem("goldBalance");
      return saved ? Number(saved) : 0;
    } catch {
      return 0;
    }
  });

  // ── Persist on change ─────────────────────────────────────────────────────
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem("goldBalance", String(goldBalance));
  }, [goldBalance]);

  // ── Helpers ───────────────────────────────────────────────────────────────
  const addTransaction = (transaction) => {
    setTransactions((prev) => [...prev, { ...transaction, timestamp: transaction.timestamp ?? new Date() }]);
  };

  /**
   * Compute silver balance from all non-exchange transactions:
   *   silverBalance = sum(income) − sum(expense)
   */
  const getSilverBalance = () =>
    transactions
      .filter((t) => t.type !== "exchange")
      .reduce((acc, t) => {
        if (t.type === "income") return acc + t.amount;
        if (t.type === "expense") return acc - t.amount;
        return acc;
      }, 0);

  /**
   * Compute weekly profit change (current calendar week, Mon–Sun):
   *   weeklyChange = sum(income this week) − sum(expense this week)
   */
  const getWeeklyChange = () => {
    const now = new Date();
    // Monday of current week at 00:00:00
    const dayOfWeek = now.getDay(); // 0=Sun … 6=Sat
    const diffToMonday = (dayOfWeek + 6) % 7;
    const monday = new Date(now);
    monday.setDate(now.getDate() - diffToMonday);
    monday.setHours(0, 0, 0, 0);

    return transactions
      .filter((t) => t.type !== "exchange" && new Date(t.timestamp) >= monday)
      .reduce((acc, t) => {
        if (t.type === "income") return acc + t.amount;
        if (t.type === "expense") return acc - t.amount;
        return acc;
      }, 0);
  };

  // ── Gold ↔ Silver conversions ─────────────────────────────────────────────
  /**
   * Buy gold with silver.
   * @returns {{ success: boolean, message?: string }}
   */
  const buyGold = ({ goldPrice, silverAmount }) => {
    const currentSilver = getSilverBalance();
    if (silverAmount > currentSilver) {
      return { success: false, message: "Not enough silver to complete this conversion." };
    }
    const goldReceived = Math.floor(silverAmount / goldPrice);
    if (goldReceived < 1) {
      return { success: false, message: "Silver amount too low to receive any gold at that price." };
    }

    addTransaction({
      type: "exchange",
      category: "Gold Exchange",
      amount: silverAmount,
      note: `Converted ${silverAmount.toLocaleString()} silver → ${goldReceived} gold`,
      timestamp: new Date(),
    });
    setGoldBalance((prev) => prev + goldReceived);
    return { success: true };
  };

  /**
   * Buy silver with gold.
   * @returns {{ success: boolean, message?: string }}
   */
  const buySilver = ({ goldPrice, goldAmount }) => {
    if (goldAmount > goldBalance) {
      return { success: false, message: "Not enough gold to complete this conversion." };
    }
    const silverReceived = goldAmount * goldPrice;

    addTransaction({
      type: "exchange",
      category: "Gold Exchange",
      amount: silverReceived,
      note: `Converted ${goldAmount} gold → ${silverReceived.toLocaleString()} silver`,
      timestamp: new Date(),
    });
    setGoldBalance((prev) => prev - goldAmount);

    // We add a matching income transaction so silver balance reflects the gain
    addTransaction({
      type: "income",
      category: "Gold Exchange",
      amount: silverReceived,
      note: `Received from gold sale (${goldAmount} gold @ ${goldPrice})`,
      timestamp: new Date(),
    });
    return { success: true };
  };

  const value = {
    transactions,
    addTransaction,
    goldBalance,
    setGoldBalance,
    getSilverBalance,
    getWeeklyChange,
    buyGold,
    buySilver,
  };

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
}

export function useWallet() {
  const ctx = useContext(WalletContext);
  if (!ctx) throw new Error("useWallet must be used inside <WalletProvider>");
  return ctx;
}
