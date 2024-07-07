import styled from "styled-components";

export const Container = styled.div`
    width: 72px;
    height: 38px;
    border-radius: 6px;
    padding: 8px;
    gap: 4px;

    background-color:  ${({ theme }) => theme["base-button"]};
    color:  ${({ theme }) => theme["purple-dark"]};
`;
