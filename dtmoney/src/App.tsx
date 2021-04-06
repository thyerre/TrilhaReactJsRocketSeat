import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./hooks/useTransactions";


export function App() {
  const [isMewTransactionModalOpen, setIsMewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsMewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsMewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider >
      <Header onHandleOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      
      <Dashboard />

      <NewTransactionModal 
        onIsNewTransactionModalOpen={isMewTransactionModalOpen}
        onHandleCloseNewTransactionModal={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}
