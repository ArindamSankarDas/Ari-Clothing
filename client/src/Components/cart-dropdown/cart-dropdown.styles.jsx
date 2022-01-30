import styled from "styled-components";
import Button from "../custom-button/custom-button.component";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 28rem;
  height: 34rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid black;
  background-color: white;
  top: 9rem;
  right: 4rem;
  z-index: 5;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 1.2rem;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgb(92, 90, 90);
    border-radius: 2.5rem;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgb(39, 38, 38);
  }
`;

export const CartItemsContainer = styled.div`
  height: 24rem;
  display: flex;
  flex-direction: column;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 1.8rem;
  margin: 10rem auto;
`;

export const ButtonContainer = styled(Button)`
  margin-top: auto;
`;
