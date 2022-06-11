import React from "react"
import { Container, Label } from "../text/style"

type InputNumberProps = {
    label : string
    onChange: (score:number)=> void

}
const InputNumber = ({label, onChange}:InputNumberProps)=>{

    return(
        <Container>
            <Label>
                {label}
            </Label>
            <input onChange={(e)=>{onChange(parseInt(e.target.value))}} className="form-control mr-sm-2" type="number"  aria-label="Search" />

        </Container>
    )
}

export default InputNumber