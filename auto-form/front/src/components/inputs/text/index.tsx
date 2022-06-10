import React from "react";
import { Container, Input, Label } from "./style";

type InputTextProps = {
    label:string;
    onChange: (name:string)=> void
    style?: React.CSSProperties
    styleContainer?: React.CSSProperties
}
const InputText = ({label, onChange, style, styleContainer }:InputTextProps)=>{
    return(
        <Container style={styleContainer}>
            <Label>
                {label}
            </Label>
            <input style={style} onChange={(e)=>onChange(e.target.value)} className="form-control mr-sm-2" type="search"  aria-label="Search" />
            
            {/* <Input onChange={(e)=>onChange(e.target.value)} /> */}
        </Container>
    )
}

export default InputText;