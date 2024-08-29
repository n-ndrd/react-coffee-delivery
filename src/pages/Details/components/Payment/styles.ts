import styled from "styled-components";

export const FormContainer = styled.div`
    width: 640px;
    height: 207px;
    border-radius: 4px;
    padding: 40px;
    gap: 32px;
    margin-top: 10px;

    background-color: ${({ theme }) => theme["base-card"]}; 

    @media (max-width: 500px) {
        width: 100%;
        padding: 20px;
        height: auto;
    }
`;

export const Header = styled.div`
    margin-bottom: 32px;
    display: flex;
    align-items: flex-start;
    gap: 10px;

    svg {
        color: ${({ theme }) => theme["purple"]}
    }
`;

export const Title = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 20.8px;
    color: ${({ theme }) => theme["base-subtitle"]};
`;

export const Subtitle = styled.p`
    font-weight: 400;
    font-size: 12px;
    color: ${({ theme }) => theme["base-text"]};
    line-height: 18.2px;
`;

export const MethodContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    @media (max-width: 500px) {
        flex-direction: column;
    }
`;
