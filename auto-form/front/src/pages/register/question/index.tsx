import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ButtonCreate from "../../../components/buttons/create";
import InputNumber from "../../../components/inputs/number";
import InputSelect from "../../../components/inputs/select";
import InputText from "../../../components/inputs/text";
import ModalComponent from "../../../components/modal";
import Table from "../../../components/table";
import useColumns from "../../../utils/columns-table-question";
import { Container, Content, Header } from "../style";


type AlternativeProps = {
    setNameAlternative : any;
    setScore: any;
}
const Alternative = ({setNameAlternative, setScore}:AlternativeProps) => {
    // const [answe, setAnswer] = useState<string>("")

    const handleAnswer = (answer: string) => {
        setNameAlternative(answer)
    }

    const handleScore = (score:number)=>{
        setScore(score)
    }
    return (
        <div className="mt-4" style={{ width: '90%', margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
            <InputText onChange={handleAnswer} label="answer" />
            {/* <div className=""> */}
            <InputNumber onChange={handleScore} label="score" />
            {/* </div> */}
        </div>
    )
}

const Question = () => {

    const columns = useColumns()
    const [allDimensions, setAllDimensions] = useState([]);
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const [nameDimension, setNameDimension] = useState<string>("");
    const [idDimensionSelected, setIdDimensionSelected] = useState<number>();
    const [idAttributeSelected, setIdAttributeSelected] = useState<number>();
    const [allAttributes, setAllAttributes] = useState([]);
    const [allQuestions, setAllQuestions] = useState([])
    const [nameQuestion, setNameQuestion] = useState('')
    const [nameAlternative, setNameALternative] = useState<string>('')
    const [score, setScore]= useState<number>();





    const handleIsOpenModal = () => {
        setIsOpenModal(state => !state)
    }

    const handleNameQuestion = (nameQuestion: string) => {
        setNameQuestion(nameQuestion);
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

    const handleGetAllQuestions = () => {
        const optionsGetAllQuestions = {
            url: ' http://127.0.0.1:5000/getAllQuestion',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }

        axios(optionsGetAllQuestions).then(res => {
            setAllQuestions(res.data.questions)
        })
    }

    useEffect(() => {
        handleGetAllDimensions();
        handleGetAllAttributes()
        handleGetAllQuestions()
    }, [])

    const createQuestion = async (nameQuestion: string) => {

        const optionsCreateQuestion = await {
            url: ' http://127.0.0.1:5000/createQuestion',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                'name_question': nameQuestion,
                'id_attribute': idAttributeSelected
            }
        }

        const optionCreateAlternative = (id_question: number, score: number) => {
            axios({
                url: ' http://127.0.0.1:5000/createAlternative',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    'name_alternative': nameAlternative,
                    'id_question': id_question,
                    'score': score
                }
            })
        }

        axios(optionsCreateQuestion).then((res) => {
            setAllQuestions(res.data.questions)
            const idQuestion =  parseInt(res.data.questions[res.data.questions.length - 1].id_question)
            optionCreateAlternative(idQuestion, 5)
        })


    }


    return (
        <Container>
            <ModalComponent onClickSave={() => { createQuestion(nameQuestion) }} stateModalOpen={isOpenModal} setState={setIsOpenModal} title="Create Dimension">
                <InputSelect label="Selecione uma Dimensão">
                    <select className="form-control mb-2" onChange={(e: any) => setIdDimensionSelected(e.target.value)}>
                        {allDimensions.map((item: any) => {
                            return (
                                <option value={item.id_dimension}>{item.name_dimension}</option>
                            )
                        })}
                    </select>
                </InputSelect>
                <InputSelect label="Selecione um atributo">
                    <select className="form-control mb-2" onChange={(e: any) => setIdAttributeSelected(e.target.value)}>
                        {allAttributes.map((item: any) => {
                            return (
                                <option value={item.id_attribute}>{item.name_attribute}</option>
                            )
                        })}
                    </select>
                </InputSelect>
                <InputText onChange={handleNameQuestion} label="Question" />
                <Alternative setScore={setScore} setNameAlternative={setNameALternative}/>
                <Button className="m-3" onClick={() => { }} variant="secondary">
                    Answer
                </Button>
            </ModalComponent>
            <Content>
                <Header>
                    <ButtonCreate label="create" onClicked={() => handleIsOpenModal()} />
                </Header>
                <Table columns={columns} data={allQuestions} />
            </Content>
        </Container>
    )
}

export default Question