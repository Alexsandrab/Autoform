import React, { useEffect, useState } from "react";
import ButtonCreate from "../../../components/buttons/create";
import Table from "../../../components/table";
import { Container, Content, Header } from "../style";
import useColumns from "../../../utils/columns-table-dimension";
import ModalComponent from "../../../components/modal";
import InputText from "../../../components/inputs/text";
import axios from "axios";


const Dimension = () => {
  const columns = useColumns()
  const [allDimensions, setAllDimensions]= useState([]);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [nameDimension, setNameDimension]=useState<string>("");

  

  const handleIsOpenModal = ()=>{
    setIsOpenModal(state => !state)
  }

  const handleNameDimension = (nameDimension:string)=>{
    setNameDimension(nameDimension);
  }

  const handleGetAllDimensions = ()=>{
    const optionsGetAllDimension = {
      url:' http://127.0.0.1:5000/getAllDimensions',
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      },
    }
    
    axios(optionsGetAllDimension).then(res=>{
      setAllDimensions(res.data.dimensions)
    })
  }
  

  useEffect(()=>{
    handleGetAllDimensions();
  }, [])

  const createDimension = (nameDimension:string)=>{
    const optionsCreateDimension = {
      url:' http://127.0.0.1:5000/createDimension',
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      data:{
        'name_dimension': nameDimension
      }
    } 
    
    axios(optionsCreateDimension).then(res=>setAllDimensions(res.data.dimensions))
  }

  return (
    <Container>
      <ModalComponent onClickSave={()=>{createDimension(nameDimension)}} stateModalOpen={isOpenModal} setState={setIsOpenModal} title="Create Dimension">
        <InputText onChange={handleNameDimension}  label="Dimensão" />
      </ModalComponent>
      <Content>
        <Header>
          <ButtonCreate label="create" onClicked={()=>handleIsOpenModal()} />
        </Header>
        <Table columns={columns} data={allDimensions} />
      </Content>
    </Container>
  )
}

export default Dimension;