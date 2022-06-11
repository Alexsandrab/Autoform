import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SideBar from "../components/sidebar";
import Dimension from "../pages/register/dimension";
import Home from "../pages/home";
import { Container, ContainerTitle, Content } from "./style";
import Atributte from "../pages/register/atributte";
import Question from "../pages/register/question";
import FormTable from "../pages/forms/table-form";
import CreateForm from "../pages/forms/create-form";
import Tdd from "../pages/tdd/table";

const RootElement = () => {
    return (
        <BrowserRouter>
            <Container>
                <SideBar />                

                <Content>
                    <ContainerTitle />
                    {/* </ContainerTitle> */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/register/dimensions" element={<Dimension />} />
                        <Route path="register/attributes" element={<Atributte />} />
                        <Route path="register/questions" element={<Question />} />
                        <Route path="/forms" element={<FormTable />} />
                        <Route path="/register/form" element={<CreateForm />} />
                        <Route path="/register/tdd" element={<Tdd />} />
                            {/* <Route path="/register/form" element={<CreateForm />} /> */}
                        {/* </Route> */}
                    </Routes>
                </Content>
            </Container>
        </BrowserRouter>
    )
}

export default RootElement