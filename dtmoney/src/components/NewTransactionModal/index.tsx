import { ButtonType, ButtonSubimit, Container, Content, InputForm, TitleModal, ButtonClose, TypeContainer } from "./styles";
import Modal from 'react-modal';
import closeImg from './../../assets/close.svg'
import incomeImg from './../../assets/income.svg'
import outcomeImg from './../../assets/outcome.svg'
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

Modal.setAppElement('#root');
interface NewTransactionModalOpenProps {
    onIsNewTransactionModalOpen: boolean,
    onHandleCloseNewTransactionModal: () => void
}

interface Transaction {
    type: string,
    value: number,
    title: string,
    category: string
}

export function NewTransactionModal({ onIsNewTransactionModalOpen, onHandleCloseNewTransactionModal }: NewTransactionModalOpenProps) {
    const [type, setType] = useState('deposit');
    const [value, setValue] = useState(0);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        const data = {
            type,
            value,
            title,
            category,
            createAt: new Date()
        }

        saveTransaction(data);
        onHandleCloseNewTransactionModal();

    }

    function saveTransaction(form: Transaction) {
        api.post('transactions', form)
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
                    value={value} 
                    onChange={({target}) => (setValue(Number(target.value)))}
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