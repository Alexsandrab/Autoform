import React from "react";
import { Container, Input, Label } from "../text/style";

type InputTextProps = {
    label:string;
    children?: React.ReactNode
    // onChange: (name:string)=> void
}
const InputSelect = ({label, children}:InputTextProps)=>{
    return(
        <Container>
            <Label>
                {label}
            </Label>
            {children}
            {/* <input onChange={(e)=>onChange(e.target.value)} className="form-control mr-sm-2" type="search"  aria-label="Search" /> */}
            
            {/* <Input onChange={(e)=>onChange(e.target.value)} /> */}
        </Container>
    )
}

export default InputSelect;