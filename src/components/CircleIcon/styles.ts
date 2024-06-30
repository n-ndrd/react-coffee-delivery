import styled from "styled-components";

interface CircleIconStylesProps {
	iconcolor: string;
}

export const CircleIconStyles = styled.div<CircleIconStylesProps>`
    padding: 0.5rem;
    border-radius: 50%;
    background: ${(props) => props.iconcolor};
    color: ${({ theme }) => theme["background"]};

    display: flex;
    align-items: center;
`;
