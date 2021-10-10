import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2.5rem;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 7rem;
  padding: 2.5rem;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 1rem 1.2rem;
  text-decoration: none;
  color: #000;
  cursor: pointer;
`;

export const HeaderTwo = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  @media (max-width: 555px) {
    font-size: 1.5rem;
  }
`;
