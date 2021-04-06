import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";


interface Transaction {
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string,
    createAt: string,
}

type TransactionInput = Omit<Transaction, 'id' | 'createAt'>;
// type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;

interface TransactionsContextData {
    transactions: Transaction[],
    createNewTransaction: (newTransaction: TransactionInput) => void
}

interface TransactionsProviderProps {
    children: ReactNode
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({children}:TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        getTransactions();
    }, [])

    function createNewTransaction(newTransaction: TransactionInput) {
        saveTransaction(newTransaction);
    }

    function saveTransaction(form: TransactionInput) {
        api.post('transactions', form)
    }

    function getTransactions() {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createNewTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}