import styled from "styled-components";

export const CardContainer = styled.div`
    width: 230px;
    height: 280px;
    background: ${(props) => props.theme["base-card"]};
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

export const TagsContainer = styled.div``;

export const TextContainer = styled.div`
    text-align: center;
    margin-top: 16px;
`;

export const Title = styled.strong`
    font-family: 'Baloo 2', cursive;
    font-size: 20px;
    font-weight: 700;
    line-height: 26px;
    color: ${(props) => props.theme["base-subtitle"]};
`;

export const Description = styled.span`
    display: block;
    /* padding: 0 13px; */
    font-size: 11px;
    line-height: 18.2px;
    margin-top: 8px;
    color: ${(props) => props.theme["base-label"]};
`;

export const PriceContainer = styled.div`
    margin-top: 2rem;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const Price = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 0.25rem;
`;
export const Currency = styled.span`
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-text"]};
`;
export const PriceValue = styled.div`
    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.125rem;
    color: ${(props) => props.theme["base-text"]};
`;
