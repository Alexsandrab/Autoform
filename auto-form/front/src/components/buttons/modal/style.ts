import styled from "styled-components";


export const Container = styled.div<{primary:boolean}>`
    width: 90px;
    height: 38px;
    border-radius: 8px;
    border: 1px solid rgb(251, 134, 48);
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props=> props.primary ? 'rgb(251, 134, 48)' : "#FFF" };
    cursor: pointer;
    margin: 20px;
    /* rgb(251, 134, 48); */
`

export const Label = styled.p<{primary:boolean}>`
    /* color: #FFF; */
    font-size: 20px;
    /* font-weight: bold; */
    color: ${props=> props.primary ?  "#FFF" : 'rgb(251, 134, 48)'}
    
`