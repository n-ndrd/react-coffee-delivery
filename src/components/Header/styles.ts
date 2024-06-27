import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 104px;
    background-color: ${({ theme }) => theme["background"]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px 160px; 

    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
    }
`;

export const Location = styled.div`
    width: 143px;
    height: 38px;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme["purple-light"]};
    color: ${({ theme }) => theme["purple"]};
    border-radius: 6px;
    
    span{
        color: ${({ theme }) => theme["purple-dark"]};
        width: 101px;
        height: 18px;
        font-weight: 400;
        font-size: 14px;
    }
`;
