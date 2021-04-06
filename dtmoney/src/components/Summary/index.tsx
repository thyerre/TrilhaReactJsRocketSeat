import { Container } from "./styles";

import incomeImg from './../../assets/income.svg';
import outcomeImg from './../../assets/outcome.svg';
import totalImg from './../../assets/total.svg';
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
    const { transactions } = useTransactions();

    const { deposits, withdraws, total } = transactions.reduce((acc, transaction) => {

        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        }

        if (transaction.type === 'withdraw') {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    },
    {
        deposits: 0,
        withdraws: 0,
        total: 0
    })

    return (
        <Container total={total}> 
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt=""/>
                </header>
                <strong>
              + {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(deposits)}
                </strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt=""/>
                </header>
                <strong>
              - {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(withdraws)}
                </strong>
            </div>

            <div className="highlight-background" >
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt=""/>
                </header>
                <strong >
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(total)}
                </strong>
            </div>
        </Container>
    )
}