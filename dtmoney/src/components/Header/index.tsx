import { useState } from 'react'
import logoImg from './../../assets/logo.svg'
import { Container, Content } from './styles'
import Modal from 'react-modal'

export function Header() {
    const [isMewTransactionModalOpen, setIsMewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsMewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsMewTransactionModalOpen(false);
    }

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={handleOpenNewTransactionModal}>
                    Nova Transação
                </button>
                <Modal 
                    isOpen={isMewTransactionModalOpen}  
                    onRequestClose={handleCloseNewTransactionModal}
                 >
                    <h2>Cadastrar Transação</h2>
                </Modal>
            </Content>
        </Container>
    )
}