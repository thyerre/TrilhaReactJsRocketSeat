import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "./../services/api";


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
    createNewTransaction: (newTransaction: TransactionInput) => Promise<void>
}

interface TransactionsProviderProps {
    children: ReactNode
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({children}:TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        getTransactions();
    }, [])

    async function createNewTransaction(newTransaction: TransactionInput) {
        const form = { 
            ...newTransaction, 
            createAt: new Date()
        }

        return await saveTransaction(form);
    }

    async function saveTransaction(form: TransactionInput) {
        const response = await api.post('transactions', form)
        const { transaction } = response.data;
        setTransactions([
            ...transactions,
            transaction
        ]);
        getTransactions();

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


export function useTransactions() {
    const context = useContext(TransactionsContext);

    return context;
}