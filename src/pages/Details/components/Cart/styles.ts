import styled from "styled-components";

export const FormContainer = styled.div`
    width: 448px;
    height: 498px;
    border-radius: 6px 36px 6px 36px;
    padding: 40px;

    background-color: ${({ theme }) => theme["base-card"]}; 

    @media (max-width: 500px) {
        width: 100%;
        padding: 20px;
        height: auto;
    }
`;

export const TotalContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    margin: 24px 0;
`;

export const PricesContainer = styled.div<{ isTotal?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    color: ${({ isTotal }) =>
			isTotal
				? ({ theme }) => theme["base-subtitle"]
				: ({ theme }) => theme["base-text"]};

    font-weight: ${({ isTotal }) => (isTotal ? "700" : "400")};

    font-size: ${({ isTotal }) => (isTotal ? "16px" : "12px")};
    
`;

export const Button = styled.button`
    width: 100%;
    padding: 12px 8px;
    border-radius: 6px;
    gap: 4px;
    border: 0;

    background-color: ${({ theme }) => theme["yellow"]}; 

    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme["white"]};
`;
