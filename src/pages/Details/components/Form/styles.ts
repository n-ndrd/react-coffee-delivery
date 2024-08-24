import styled from "styled-components";

export const FormContainer = styled.div`
    width: 640px;
    height: 372px;
    border-radius: 4px;
    padding: 40px;
    gap: 32px;

    background-color: ${({ theme }) => theme["base-card"]}; 
`;

export const Header = styled.div`
    margin-bottom: 2rem;
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;

    svg {
        color: ${({ theme }) => theme["yellow-dark"]}
    }
`;

export const Title = styled.p`
    font-weight: 400;
    line-height: 1.3rem;
    color: ${({ theme }) => theme["base-subtitle"]};
`;

export const Subtitle = styled.p`
    font-weight: 400;
    color: ${({ theme }) => theme["base-text"]};
    font-size: 0.875rem;
    line-height: 1.14rem;
`;
