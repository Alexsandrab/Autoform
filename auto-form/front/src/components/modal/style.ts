import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 80%;
    position: absolute;
    display: flex;
    /* flex: 1; */
    align-items: center;
    justify-content: center;
    z-index: 100;
    /* background: black; */
    /* background: ''; */
`

export const Content = styled.div`
    width: 60%;
    height: 60%;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: #FFF;
    position: absolute;
`
export const Header = styled.div`
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    background: rgb(251, 134, 48);
`

export const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    /* height: 100%; */
    /* background: red; */
`

export const Footer = styled.div`
    width: 100%;
    /* background: red; */
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Title = styled.p`
    color: #FFF;
    font-size: 20px;
    margin-left: 10px;
`