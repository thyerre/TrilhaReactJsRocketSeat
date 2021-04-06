import { ButtonType, ButtonSubimit, Container, Content, InputForm, TitleModal, ButtonClose, TypeContainer } from "./styles";
import { FormEvent, useState } from "react";
import Modal from 'react-modal';

import closeImg from './../../assets/close.svg'
import incomeImg from './../../assets/income.svg'
import outcomeImg from './../../assets/outcome.svg'
import { useTransactions } from "../../hooks/useTransactions";

Modal.setAppElement('#root');
interface NewTransactionModalOpenProps {
    onIsNewTransactionModalOpen: boolean,
    onHandleCloseNewTransactionModal: () => void
}

export function NewTransactionModal({ onIsNewTransactionModalOpen, onHandleCloseNewTransactionModal }: NewTransactionModalOpenProps) {
    const { createNewTransaction } = useTransactions()

    const [type, setType] = useState('deposit');
    const [amount, setAmount] = useState(0);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');

    
    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();
        
        await createNewTransaction({
            title,
            amount,
            category,
            type
        })
        clearFormModal();

        onHandleCloseNewTransactionModal();
    }
    
    function clearFormModal() {
        setType('deposit');
        setAmount(0);
        setTitle('');
        setCategory('');
    }

    return (
        <Container>
            <Modal 
                isOpen={onIsNewTransactionModalOpen}  
                onRequestClose={onHandleCloseNewTransactionModal}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
            >

            <Content onSubmit={handleCreateNewTransaction}>

                <ButtonClose type="button" onClick={onHandleCloseNewTransactionModal}>
                    <img src={closeImg} alt=""/>
                </ButtonClose>

                <TitleModal>Cadastrar Transação</TitleModal>

                <InputForm 
                    type="text" 
                    placeholder="Titulo" 
                    value={title} 
                    onChange={({target}) => (setTitle(target.value))}
                />
                <InputForm 
                    type="number" 
                    placeholder="valor" 
                    value={amount} 
                    onChange={({target}) => (setAmount(Number(target.value)))}
                />

                <TypeContainer>

                    <ButtonType 
                        type="button"
                        onClick={() => {setType('deposit')}}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt=""/>
                        <span>Entrada</span>
                    </ButtonType>

                    <ButtonType 
                        type="button" 
                        onClick={() => {setType('withdraw')}}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt=""/>
                        <span>Saída</span>
                    </ButtonType>

                </TypeContainer>

                <InputForm 
                    type="text" 
                    placeholder="Categoria" 
                    value={category}
                    onChange={({target}) => (setCategory(target.value))}
                />

                <ButtonSubimit type="submit" > Cadastrar</ButtonSubimit>

            </Content>

            </Modal>
    </Container>
    )
}