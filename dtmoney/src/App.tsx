import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsContext } from "./TransactionsContext";


export function App() {
  const [isMewTransactionModalOpen, setIsMewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsMewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsMewTransactionModalOpen(false);
  }

  return (
    <TransactionsContext.Provider value={[]}>
      <Header onHandleOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      
      <Dashboard />

      <NewTransactionModal 
        onIsNewTransactionModalOpen={isMewTransactionModalOpen}
        onHandleCloseNewTransactionModal={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsContext.Provider>
  );
}
