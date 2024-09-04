import styled from "styled-components";

export const CardContainer = styled.div`
    width: 230px;
    height: 280px;
    background: ${({ theme }) => theme["base-card"]};
    padding: 1.25rem 1.5rem;
    border-radius: 6px 36px 6px 36px;

    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const ImgStyled = styled.img`
    height: 7.5rem;
    margin-top: -2.7rem;
    user-select: none;
`;

export const TagsContainer = styled.div`
    display: flex;
    margin-top: 12px;
    gap: 4px;
`;

export const Tag = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme["yellow-light"]};
    color: ${({ theme }) => theme["yellow-dark"]};
    height: 21px;
    padding: 2px 6px;
    white-space: nowrap;
    font-size: 10px;
    font-weight: 700;
    line-height: 13px;
    border-radius: 100px;
`;

export const TextContainer = styled.div`
    text-align: center;
    margin-top: 16px;
`;

export const Title = styled.strong`
    font-family: 'Baloo 2', cursive;
    font-size: 19px;
    font-weight: 700;
    line-height: 26px;
    color: ${({ theme }) => theme["base-subtitle"]};

    white-space: nowrap;

    @media (max-width: 590px) {
        font-size: 16px;
    }
`;

export const Description = styled.span`
    display: block;
    font-size: 11px;
    line-height: 18.2px;
    margin-top: 8px;
    color: ${({ theme }) => theme["base-label"]};
`;

export const PriceContainer = styled.div`
    margin-top: 16px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 590px) {
        margin-top: 16px;
    }
`;

export const Price = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 0.25rem;
`;

export const Currency = styled.span`
    font-size: 0.875rem;
    color: ${({ theme }) => theme["base-text"]};
`;

export const PriceValue = styled.div`
    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.125rem;
    color: ${({ theme }) => theme["base-text"]};
`;

export const Controls = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    
`;

export const Button = styled.button`
    width: 38px;
    height: 38px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background-color: ${({ theme }) => theme["purple-dark"]};
    color: ${({ theme }) => theme["white"]};
    border-radius: 6px;
`;
