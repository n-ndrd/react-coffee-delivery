import styled from "styled-components";

export const Container = styled.div<{ focused: boolean }>`
    display: flex;
    padding: 16px;
    gap: 12px;

    border-radius: 6px;
    transition: background 0.2s;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 1;

    user-select: none; 
    cursor: default; 

    background-color: ${({ focused }) =>
			focused
				? ({ theme }) => theme["purple-light"]
				: ({ theme }) => theme["base-button"]};

                
    border: 1px solid ${({ focused }) =>
			focused
				? ({ theme }) => theme["purple"]
				: ({ theme }) => theme["base-button"]};


    svg  {
        color: ${({ theme }) => theme["purple"]};
        font-size: 16px;
    }

    @media (max-width: 590px) {
        width: 100%;
    }
`;

export const Text = styled.p`
    white-space: nowrap;
    color: ${({ theme }) => theme["base-text"]};
    font-size: 12px;
`;
