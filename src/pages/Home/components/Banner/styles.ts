import styled from "styled-components";

export const ContainerBanner = styled.section<{ background: string }>`
    width: 100%;
    height: 450px;
    background-image: url(${({ background }) => background});
    background-color: ${({ theme }) => theme["background"]};
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContentText = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 580px;
`;

export const Title = styled.h1`
    height: 124px;
    font-family: 'Baloo 2', cursive;
    font-size: 44px;
    font-weight: 900;
    line-height: 62.4px;
    color: ${({ theme }) => theme["base-title"]};
`;

export const SubTitle = styled.h2`
    height: 52px;
    font-size: 19px;
    font-weight: 400;
    line-height: 20px;
    margin-top: 10px;
    color: ${({ theme }) => theme["base-subtitle"]};
`;

export const ContentList = styled.div`

`;

// export const CircleIconStyles = styled.div<{ colorCircle: string }>`
//     padding: 0.5rem;
//     border-radius: 50%;
//     background: ${(props) => props.colorCircle};
//     color: ${({ theme }) => theme["background"]};

//     display: flex;
//     align-items: center;
// `;
