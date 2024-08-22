import styled from "styled-components";

export const ContainerBanner = styled.section<{ background: string }>`
    width: 100%;
    /* height: 450px; */
    flex: 1;

    background-image: url(${({ background }) => background});
    background-color: ${({ theme }) => theme["background"]};
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    align-items: center;
    justify-content: center;

    img{
        @media (max-width: 1030px) {
            display: none;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const ContentText = styled.div`
    align-items: center;
    justify-content: flex-start;

    width: 580px;

    @media (max-width: 500px) {
        width: 100%;
        justify-content: center;
    }
`;

export const Title = styled.h1`
    height: 124px;
    font-family: 'Baloo 2', cursive;
    color: ${({ theme }) => theme["base-title"]};
    font-size: 44px;
    font-weight: 900;
    line-height: 62.4px;

    @media (max-width: 500px) {
        padding: 0;
        font-size: 25px;
        text-align: center;
    }
`;

export const SubTitle = styled.h2`
    height: 52px;
    font-size: 19px;
    font-weight: 400;
    line-height: 20px;
    margin-top: 10px;
    color: ${({ theme }) => theme["base-subtitle"]};

    @media (max-width: 500px) {
        font-size: 15px;
        text-align: center;
    }
`;

export const ContentList = styled.div`
    display: grid;
    grid-template-columns: max-content max-content;
    
    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        margin: 2px 12px;
        margin-left: 0;
    }

    span{
        text-align: center;

        @media (max-width: 500px) {
            display: none;
        }
    }

    @media (max-width: 500px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
