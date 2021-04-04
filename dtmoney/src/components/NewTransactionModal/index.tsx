import { Content } from "./styles";
import Modal from 'react-modal';

interface NewTransactionModalOpenProps {
    onIsNewTransactionModalOpen: boolean,
    onHandleCloseNewTransactionModal: () => void
}

export function NewTransactionModal({ onIsNewTransactionModalOpen, onHandleCloseNewTransactionModal }: NewTransactionModalOpenProps) {

    return (
        <Content>
            <Modal 
                isOpen={onIsNewTransactionModalOpen}  
                onRequestClose={onHandleCloseNewTransactionModal}
            >
                <h2>Cadastrar Transação</h2>
            </Modal>
    </Content>
    )
}