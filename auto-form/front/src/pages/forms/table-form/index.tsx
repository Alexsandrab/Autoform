import React, { useState } from "react"
import ButtonCreate from "../../../components/buttons/create"
import InputSelect from "../../../components/inputs/select"
import InputText from "../../../components/inputs/text"
import ModalComponent from "../../../components/modal"
import Table from "../../../components/table"
import useColumns from "../../../utils/columns-table-form"
import {Container, Content, Header} from '../../register/style'
import {useNavigate} from "react-router-dom"

const FormTable = () => {
    const columns = useColumns();
    let navigate = useNavigate()
    const [allForms, setAllForms] = useState([]);
    
    const handleNavigate = ()=>{
        navigate('/register/form', {replace:true})
    }

    return (
        <Container>
            <Content>
                <Header>
                    <ButtonCreate label="create" onClicked={handleNavigate} />
                </Header>
                <Table columns={columns} data={allForms} />
            </Content>
        </Container>
    )
}

export default FormTable