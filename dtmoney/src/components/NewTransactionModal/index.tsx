import { ButtonSubimit, Container, Content, InputForm, TitleModal, ButtonClose } from "./styles";
import Modal from 'react-modal';
import closeImg from './../../assets/close.svg'

Modal.setAppElement('#root');
interface NewTransactionModalOpenProps {
    onIsNewTransactionModalOpen: boolean,
    onHandleCloseNewTransactionModal: () => void
}

export function NewTransactionModal({ onIsNewTransactionModalOpen, onHandleCloseNewTransactionModal }: NewTransactionModalOpenProps) {

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
                <InputForm type="text" placeholder="Categoria"/>
                <ButtonSubimit type="submit" > Cadastrar</ButtonSubimit>

            </Content>

            </Modal>
    </Container>
    )
}