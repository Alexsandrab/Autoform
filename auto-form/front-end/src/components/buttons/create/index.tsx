import React from "react";
import { Container, Content, Label } from "./style";
import { FaPlusCircle } from 'react-icons/fa'
import { Button } from "react-bootstrap";

type ButtonCreateProps = {
    onClicked: () => void;
    label: string
}

const ButtonCreate = ({ onClicked, label }: ButtonCreateProps) => {
    return (
        <div className="text-gred">
            <Button  style={{ background: "#FB8630", display:"flex", alignItems:'center', justifyContent:'center' }} onClick={onClicked}>
                <FaPlusCircle style={{margin:'0px', padding:'0px'}} size={16} color={'#FFF'} />
                <p style={{margin:'0px', padding:'0px'}}>{label}</p>
            </Button>
        </div>
    )
}

export default ButtonCreate;