import styled from "styled-components";

export const FormContainer = styled.div`
    width: 640px;
    height: 372px;
    border-radius: 4px;
    padding: 40px;
    gap: 32px;

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
        color: ${({ theme }) => theme["yellow-dark"]}
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

export const ContainerInputs = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (max-width: 590px) {
        > div {
        width: 100%;
        }
    }
`;

export const MultiInputs = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    @media (max-width: 500px) {
        flex-direction: column;
        gap: 16px;
        width: 100%;
    }
`;

export const Input = styled.input`
    width: ${(props) => props.width};
    padding: 12px;
    border: 1px solid ${({ theme }) => theme["base-button"]}; 
    border-radius: 4px;
    background-color: ${({ theme }) => theme["base-input"]};

    @media (max-width: 500px) {
        width: 100%;
    }
`;
