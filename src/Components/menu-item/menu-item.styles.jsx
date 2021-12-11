import styled from "styled-components";

const lg_Height = "38rem";
const md_Height = "280px";

export const MenuItemDiv = styled.div`
  min-width: 30%;
  height: ${({ isLarge }) => (isLarge === "large" ? lg_Height : md_Height)};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & > div {
      transform: scale(1.1);
      transition: transform 5s cubic-bezier(0.25, 0.45, 0.45, 0.95);

      & > div {
        opacity: 0.9;
      }
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const ContentDiv = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: #fff;
  opacity: 0.7;
  font-family: "Fira Sans Condensed", sans-serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1 {
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
    text-transform: uppercase;
  }

  span {
    font-weight: 900;
    font-size: 16px;
  }
`;
