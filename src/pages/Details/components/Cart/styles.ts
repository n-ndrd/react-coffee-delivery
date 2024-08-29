import styled from "styled-components";

export const FormContainer = styled.div`
    width: 448px;
    height: 498px;
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
