import React from "react";
import { Container, Label } from "./style";

type ButtonModalProps = {
    label: string;
    background?: boolean;
    primary: boolean
    onClick?: ()=> void;
} 

const ButtonModal = ({label, background, primary, onClick}: ButtonModalProps)=>{
    return(
        <Container onClick={onClick} primary={primary}>
            <Label primary={primary}>
                {label}
            </Label>
        </Container>
    )
}

export default ButtonModal;