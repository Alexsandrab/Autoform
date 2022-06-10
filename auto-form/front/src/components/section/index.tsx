import React from "react";
import { Container } from "react-bootstrap";
import { Content } from "./style";

type SectionProps = {
    children: React.ReactNode
    style?: React.CSSProperties
}

const Section = ({ children, style }: SectionProps) => {
    return (
        // <Container>
            <Content style={style}>
                {children}
            </Content>
        // </Container>
    )
}

export default Section;