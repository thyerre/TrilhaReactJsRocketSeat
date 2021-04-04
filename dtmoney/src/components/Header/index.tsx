import { useState } from 'react'
import logoImg from './../../assets/logo.svg'
import { Container, Content } from './styles'

interface OpenNewTransactionModalProps {
    onHandleOpenNewTransactionModal: () => void;
}

export function Header({ onHandleOpenNewTransactionModal }: OpenNewTransactionModalProps) {

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onHandleOpenNewTransactionModal}>
                    Nova Transação
                </button>
            </Content>
        </Container>
    )
}