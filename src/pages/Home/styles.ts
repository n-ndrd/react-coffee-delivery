import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    flex: 1;
`;

export const ContainerCoffees = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;

    align-items: center;
    background-color: ${({ theme }) => theme["background"]};  
`;

export const Title = styled.h2`
    width: 100%;
    padding: 15px 232px; 
    font-family: 'Baloo 2', cursive;
    font-size: 30px;
    font-weight: 800;
    line-height: 41.6px;
    color: ${({ theme }) => theme["base-subtitle"]};

    @media (max-width: 500px) {
      align-items: center;
      padding: 10px;
      font-size: 1.7rem;
    }
`;

export const Coffees = styled.div`
  margin: 3.375rem 0;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1140px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 790px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 490px) {
    grid-template-columns: 1fr;
  }
`;
