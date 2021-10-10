import styled, { css } from "styled-components";

const butttonStyles = css`
  background-color: black;
  color: white;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: #fff;
  margin-left: 0.8rem;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : butttonStyles;
};

export const CustomButtonContainer = styled.button`
  width: auto;
  height: 50px;
  display: flex;
  justify-content: center;
  padding: 0 35px 0 35px;
  border: none;
  letter-spacing: 1px;
  line-height: 5rem;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;

  ${getButtonStyles}
`;
