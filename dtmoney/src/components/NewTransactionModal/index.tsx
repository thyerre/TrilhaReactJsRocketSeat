import { ButtonType, ButtonSubimit, Container, Content, InputForm, TitleModal, ButtonClose, TypeContainer } from "./styles";
import Modal from 'react-modal';
import closeImg from './../../assets/close.svg'
import incomeImg from './../../assets/income.svg'
import outcomeImg from './../../assets/outcome.svg'
import { useState } from "react";

Modal.setAppElement('#root');
interface NewTransactionModalOpenProps {
    onIsNewTransactionModalOpen: boolean,
    onHandleCloseNewTransactionModal: () => void
}

export function NewTransactionModal({ onIsNewTransactionModalOpen, onHandleCloseNewTransactionModal }: NewTransactionModalOpenProps) {
    const [type, setType] = useState('deposit');

    return (
        <Container>
            <Modal 
                isOpen={onIsNewTransactionModalOpen}  
                onRequestClose={onHandleCloseNewTransactionModal}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
            >

            <Content>
                <ButtonClose type="button" onClick={onHandleCloseNewTransactionModal}>
                    <img src={closeImg} alt=""/>
                </ButtonClose>

                <TitleModal>Cadastrar Transação</TitleModal>

                <InputForm type="text" placeholder="Titulo"/>
                <InputForm type="number" placeholder="valor"/>

                <TypeContainer>

                    <ButtonType 
                        type="button"
                        onClick={() => {setType('deposit')}}
                        isActive={type === 'deposit'}
                    >
                        <img src={incomeImg} alt=""/>
                        <span>Entrada</span>
                    </ButtonType>

                    <ButtonType 
                        type="button" 
                        onClick={() => {setType('withdraw')}}
                        isActive={type === 'withdraw'}
                    >
                        <img src={outcomeImg} alt=""/>
                        <span>Saída</span>
                    </ButtonType>

                </TypeContainer>

                <InputForm type="text" placeholder="Categoria"/>

                <ButtonSubimit type="submit" > Cadastrar</ButtonSubimit>

            </Content>

            </Modal>
    </Container>
    )
}