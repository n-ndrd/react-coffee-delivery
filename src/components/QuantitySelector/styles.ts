import styled from "styled-components";

export const Container = styled.div`
    /* width: 72px; */
    height: 38px;
    border-radius: 6px;
    padding: 8px;
    gap: 4px;

    background-color:  ${({ theme }) => theme["base-button"]};
    color:  ${({ theme }) => theme["purple-dark"]};

    svg {
        color: ${props => props.theme['purple']};
        cursor: pointer;
        transition: color 0.25s;

        &:hover {
        color: ${props => props.theme['purple-dark']};
        }
    }

    display: flex;
    align-items: center;
    gap: 0.25rem;

    span{
        color: ${props => props.theme['base-title']};
        line-height: 1.25rem;
        width: 1.25rem;
        text-align: center;
    }
`;
