import styled from "styled-components";

export const Container = styled.div`
    width: 20%;
    height: 100%;
    background-color: rgb(251, 134, 48);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    /* background-color: black; */
`
export const Logo = styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
    width: 100%;
    height: 20%;
`

export const ListOption = styled.div`
    width: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    /* background-color: red; */
    align-items: center;
    /* justify-content: center; */
    /* background-color: red; */
`

export const OptionSideBar = styled.nav`
    height: auto;
    width: 100%;
    /* background: #FFF; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* justify-content: space-around; */
    /* margin: 10px 0; */
    .link{
        display: flex;
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        flex-direction: column;

    }
`
export const Option = styled.div`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;

    
    :hover{
        border-left: 1px solid rgba(241, 195, 135, 0.5);
        background: #FCB37E;
        border-radius: 10px;
        transition: 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
    }
`

export const Label = styled.p`
    margin-left: 15px;
    color: #FFF;
    font-size: 20px;
`

export const OptionSubList = styled.div`
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    /* :hover{
        border-left: 1px solid rgba(241, 195, 135, 0.5);
        background: #FCB37E;
        border-radius: 10px;
        transition: 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
    } */
`

export const SubListOption = styled.div`
    height: 90px;
    width: 35%;
    /* background: white; */
    display: flex;
    justify-content: center;
    /* align-items: center; */
    flex-direction: column;

    

    .subRouter{
        text-decoration:none;
        color:white;
        margin: 5px 0px;
        height: 30px;
        align-items: center;
        justify-content: center;

        /* :hover{    
            border-left: 1px solid rgba(241, 195, 135, 0.5);
            background: #FCB37E;
            border-radius: 10px;
            transition: 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
        } */

        
    }
`



