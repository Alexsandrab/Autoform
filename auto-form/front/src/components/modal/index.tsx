import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Label } from "../buttons/create/style";
import ButtonModal from "../buttons/modal";
import { Body, Container, Content, Footer, Header, Title } from "./style";

type ModalComponentProps = {
    children?: React.ReactNode
    title: string;
    stateModalOpen: boolean
    // onClick: ()=> void;
    setState: any
    onClickSave: () => void
}

const ModalComponent = (
    { children, title, stateModalOpen = false, setState, onClickSave }: ModalComponentProps
) => {


    const [isModal, setIsModal] = useState<boolean>(stateModalOpen)
    const isOpenModal = () => {
        // stateModalOpen = false
        setIsModal(state => !state)
        setState(false)
    }

    useEffect(() => {
        setIsModal(stateModalOpen)
    }, [stateModalOpen])
    return (
        <Modal
            show={isModal}
            // onHide
        >
            <Modal.Header>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={isOpenModal} variant="secondary">
                    Cancel
                </Button>
                <Button onClick={onClickSave} variant="secondary">
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
        // <Container>
        //     <Content>
        //         <Header>
        //             <Title>{title}</Title>
        //         </Header>
        //         <Body>
        //             {children}
        //         </Body>
        //         <Footer>
        //             <ButtonModal onClick={isOpenModal} primary={false} label="cancel" />
        //             <ButtonModal onClick={onClickSave} primary={true} label="salve" />
        //         </Footer>
        //     </Content>
        // </Container>
    )
}

export default ModalComponent;