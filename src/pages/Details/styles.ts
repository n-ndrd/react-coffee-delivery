import styled from "styled-components";

export const Container = styled.form`
    max-width: 70rem;
    width: 97%;
    margin: 2.5rem auto;

    display: grid;
    grid-template-columns: 1fr 28rem;
    gap: 2rem;

    @media (max-width: 1140px) {
        grid-template-columns: 1fr;
        overflow: hidden;
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
