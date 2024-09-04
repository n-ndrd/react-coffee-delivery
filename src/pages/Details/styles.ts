import styled from "styled-components";

export const DetailsContainer = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
     
    gap: 16px;
    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;

export const Title = styled.h2`
    width: 100%;
    font-family: 'Baloo 2', cursive;
    font-size: 18px;
    font-weight: 800;
    line-height: 41.6px;
    color: ${({ theme }) => theme["base-subtitle"]};

    @media (max-width: 500px) {
      align-items: center;
      padding: 10px;
      font-size: 1.7rem;
    }
`;
