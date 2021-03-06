import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";


interface Transaction {
    id: number,
    title: string,
    amount: number,
    category: string,
    createAt: string,
}

export function TransactionTable() {
    const { transactions } = useTransactions()
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((item) => (
                         <tr key={item.id}>
                            <td>{item.title}</td>
                            <td className={ item.type === 'deposit' ? 'deposit' : 'withdraw' }>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(item.amount)}
                            </td>
                            <td>{item.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-BR').format(new Date(item.createAt))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}