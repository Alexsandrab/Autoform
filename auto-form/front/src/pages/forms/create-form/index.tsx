import React, { useEffect, useState } from "react";
import ButtonCreate from "../../../components/buttons/create";
import InputText from "../../../components/inputs/text";
import ModalComponent from "../../../components/modal";
import Section from "../../../components/section";
import Table from "../../../components/table";
import { Container, ContentSectionQuestion, TitleQuestion } from "./style";
import useColumns from "../../../utils/columns-table-question";
import axios from "axios";


const CreateForm = () => {
    const columns = useColumns()
    const [allQuestions, setAllQuestions] = useState([]);
    const [questionsAddForm, setQuesitonsAddForm] = useState<Array<any>>([])
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    // const [totalSection, setTotalSection] = useState<any>([])
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const [alternativesByQuestions, setAlternativesByQuestions] = useState<Array<any>>([])

    const handleIsOpenModal = () => {
        setIsOpenModal(state => !state)
    }

    const handleQuestionsAddForm = (listQuestions: any) => {
        // console.log(idQuestion)
        setQuesitonsAddForm(listQuestions)
        // console.log(idQuestion.map((item: any) => {return item.original}))
    }



    const handleGetAllQuestions = () => {
        const optionsGetAllQuestions = {
            url: 'http://127.0.0.1:5000/getAllQuestion',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }

        axios(optionsGetAllQuestions).then(res => {
            setAllQuestions(res.data.questions)
        })
    }

    const getAllAlternatives=(idQuestion?:number)=>{
        const optionsGetAllAlternatives = {
            url: 'http://127.0.0.1:5000/getAllAlternativeByQuestion',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            data:{
                'id_question': 2
            }
        }

        axios(optionsGetAllAlternatives).then(res => {
            console.log(res)
            // setAlternativesByQuestions(res.data.altenatives)
        })
    }

    useEffect(() => {
        handleGetAllQuestions();
        getAllAlternatives()
    }, [])




    return (
        <Container>
            <ModalComponent onClickSave={() => { }} stateModalOpen={isOpenModal} setState={setIsOpenModal} title="Create Attribute">
                <Table setListId={handleQuestionsAddForm} columns={columns} data={allQuestions} />
            </ModalComponent>
            <Section>
                <InputText styleContainer={{ margin: '10px 0px' }} style={{ border: '1px solid #ff7300', margin: '5px 0px' }} label="Title" onChange={() => { }} />
                <InputText styleContainer={{ margin: '0px 0px 20px 0px' }} style={{ border: '1px solid #ff7300', margin: '5px 0px' }} label="Description" onChange={() => { }} />
            </Section>
            {
                questionsAddForm.map((item: any) => {
                    // {getAllAlternative(parseInt(item.original.id_question))}
                    return (
                        <Section style={{marginTop:'15px'}}>
                            <ContentSectionQuestion>
                                <TitleQuestion>{item.original.name_question}</TitleQuestion>
                                {/* <p>{item.original.name_question}</p> */}
                            </ContentSectionQuestion>
                            {/* <InputText styleContainer={{ margin: '10px 0px' }} style={{ border: '1px solid #ff7300', margin: '5px 0px' }} label="Title" onChange={() => { }} /> */}
                            {/* <InputText styleContainer={{ margin: '0px 0px 20px 0px' }} style={{ border: '1px solid #ff7300', margin: '5px 0px' }} label="Description" onChange={() => { }} /> */}
                        </Section>
                    )
                })
            }
            <div style={{ width: '90%', marginTop: '5px' }}>
                <ButtonCreate label="New Question" onClicked={handleIsOpenModal} />
            </div>
        </Container>
    )
}

export default CreateForm;