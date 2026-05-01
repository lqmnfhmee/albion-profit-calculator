import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WalletProvider } from "./context/WalletContext";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Production from "./pages/Production";
import Transactions from "./pages/Transactions";
import GoldExchange from "./pages/GoldExchange";

function App() {
  return (
    <WalletProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="production" element={<Production />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="gold" element={<GoldExchange />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </WalletProvider>
  );
}

export default App;