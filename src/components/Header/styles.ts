import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 104px;
    background-color: ${({ theme }) => theme["background"]};

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 32px 232px; 
    position: sticky;
    top: 0;

    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
    }

    @media (max-width: 1000px){
        padding: 10px; 
    }
`;

export const Location = styled.div`
    width: 143px;
    height: 38px;
    padding: 16px;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    background-color: ${({ theme }) => theme["purple-light"]};
    color: ${({ theme }) => theme["purple"]};
    
    span{
        color: ${({ theme }) => theme["purple-dark"]};
        width: 101px;
        height: 18px;
        font-weight: 400;
        font-size: 14px;
    }
`;

export const Button = styled.button`
    width: 38px;
    height: 38px;
    padding: 0;
    border: 0;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: ${({ theme }) => theme["yellow-light"]};
    color: ${({ theme }) => theme["yellow-dark"]};
`;

export const QuantityIndicator = styled.span`
    position: absolute;

    top: 25%;
    right: 14.9%;

    width: 16px;
    height: 16px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 700;

    background: ${({ theme }) => theme["yellow-dark"]};
    color: ${({ theme }) => theme["white"]};

    @media (max-width: 1000px){
        right: 0.5%;
    }
`;
