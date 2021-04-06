import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

export const TransactionsContext = createContext<Transaction[]>([]);

interface Transaction {
    id: number,
    title: string,
    amount: number,
    category: string,
    createAt: string,
}

interface TransactionsProviderProps {
    children: ReactNode
}

export function TransactionsProvider({children}:TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        getTransactions();
    }, [])

    function getTransactions() {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }

    return (
        <TransactionsContext.Provider value={transactions}>
            {children}
        </TransactionsContext.Provider>
    )
}