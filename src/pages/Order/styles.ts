import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    flex: 1;
`;

export const Header = styled.div`
    width: 100%;
    padding: 15px 232px;
    display: flex;
    align-items: flex-start;
    gap: 10px;

    margin-bottom: 16px;
`;

export const Title = styled.p`   
    font-family: 'Baloo 2', cursive;
    font-size: 28px;
    font-weight: 800;
    line-height: 41.6px;
    color: ${({ theme }) => theme["yellow-dark"]};
`;

export const Subtitle = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 18.2px;
    color: ${({ theme }) => theme["base-subtitle"]};
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 64px;
`;

export const OrderInfoContainer = styled.div`
    position: relative; 
    width: 448px;
    height: 240px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 32px;

    border-radius: 6px 36px 6px 36px;
    background-color: ${(props) => props.theme.background}; 
    padding: 40px;


    &::after {
        content: '';
        position: absolute;
        top: -1px;
        left: -1px;
        right: -1px;
        bottom: -1px;
        z-index: -1;
        border-radius: inherit; 
        background-image: linear-gradient(
            90deg,
            ${(props) => props.theme["yellow-dark"]}, 
            ${(props) => props.theme.purple}
        );
    }
`;

export const InfoContainer = styled.div`
    /* background-color: blue; */
    display: flex;
    align-items: center;
    gap: 8px;
`;
