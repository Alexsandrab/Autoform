import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonCreate from "../../../components/buttons/create";
import Table from "../../../components/table";
import useColumns from "../../../utils/columns-table-tdd";
import {Container, Content, Header} from '../../register/style'


const Tdd = ()=>{
    const columns = useColumns();
    let navigate = useNavigate()
    const [allTdd, setAllTdd] = useState([]);
    
    const handleNavigate = ()=>{
        navigate('/register/form', {replace:true})
    }

    return (
        <Container>
            <Content>
                <Header>
                    <ButtonCreate label="create" onClicked={handleNavigate} />
                </Header>
                <Table columns={columns} data={allTdd} />
            </Content>
        </Container>
    )
}

export default Tdd;