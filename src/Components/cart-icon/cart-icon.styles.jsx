import styled from "styled-components";
import { ReactComponent as ShopIcon } from "../../assets/images/shopping-bag.svg";

export const CartIconDiv = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 1rem;
  margin-right: -10%;

  span {
    position: absolute;
    bottom: 1.2rem;
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const ShoppingIcon = styled(ShopIcon)`
  width: 3rem;
  height: 3rem;
`;