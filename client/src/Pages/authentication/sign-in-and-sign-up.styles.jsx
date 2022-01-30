import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 927px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
