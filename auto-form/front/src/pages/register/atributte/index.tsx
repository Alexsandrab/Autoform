import React, { useEffect, useState } from "react";
import ButtonCreate from "../../../components/buttons/create";
import Table from "../../../components/table";
import { Container, Content, Header } from "../style";
import useColumns from "../../../utils/columns-table-attribute";
import ModalComponent from "../../../components/modal";
import InputText from "../../../components/inputs/text";
import axios from "axios";
import InputSelect from "../../../components/inputs/select";


const Atributte = () => {
  const columns = useColumns()
  const [allAttributes, setAllAttributes] = useState([]);
  const [allDimensions, setAllDimensions] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [nameAttribute, setNameAttribute] = useState<string>("");
  const [idDimensionSelected, setIdDimensionSelected] = useState<number>();



  const handleIsOpenModal = () => {
    setIsOpenModal(state => !state)
  }

  const handleNameAttribute = (nameAttribute: string) => {
    setNameAttribute(nameAttribute);
    console.log(nameAttribute)
  }

  const handleGetAllAttributes = () => {
    const optionsGetAllAttribute = {
      url: ' http://127.0.0.1:5000/getAllAttribute',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }

    axios(optionsGetAllAttribute).then(res => {
      setAllAttributes(res.data.attributes)
      // console.log(res)
    })
  }

  const handleGetAllDimensions = () => {
    const optionsGetAllDimension = {
      url: ' http://127.0.0.1:5000/getAllDimensions',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }

    axios(optionsGetAllDimension).then(res => {
      setAllDimensions(res.data.dimensions)
    })
  }




  useEffect(() => {
    handleGetAllAttributes();
    handleGetAllDimensions();
  }, [])

  const createAttribute = (nameAttribute: string) => {
    const optionsCreateAttribute = {
      url: ' http://127.0.0.1:5000/createAttribute',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {

        'name_attribute': nameAttribute,
        'id_dimension': idDimensionSelected,
      }
    }

    // console.log(nameAttribute)
    axios(optionsCreateAttribute).then(res => {
      // console.log(res.data)
      setAllAttributes(res.data.attributes)
    })
  }

  return (
    <Container>
      <ModalComponent onClickSave={() => { createAttribute(nameAttribute) }} stateModalOpen={isOpenModal} setState={setIsOpenModal} title="Create Attribute">
        <InputSelect label="Selecione uma Dimensão">
          <select className="form-control mb-2" onChange={(e: any) => setIdDimensionSelected(e.target.value)}>
            {allDimensions.map((item: any) => {
              return (
                <option value={item.id_dimension}>{item.name_dimension}</option>
              )
            })}
          </select>
        </InputSelect>
        <InputText onChange={handleNameAttribute} label="Attribute" />
      </ModalComponent>
      <Content>
        <Header>
          <ButtonCreate label="create" onClicked={() => handleIsOpenModal()} />
        </Header>
        <Table columns={columns} data={allAttributes} />
      </Content>
    </Container>
  )
}

export default Atributte;