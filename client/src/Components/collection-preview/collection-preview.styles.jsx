import styled from "styled-components";

export const CollectionPreviewDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  h1 {
    font-size: 28px;
    margin-bottom: 25px;
  }

  div {
    display: flex;  
    justify-content: space-between;
  }

  @media (max-width: 800px) {
    align-items: center;

    div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1.5rem;
    }
  }
`;
