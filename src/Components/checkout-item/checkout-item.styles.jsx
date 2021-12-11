import styled from "styled-components";

const wd = "23%";

export const CheckoutItemDiv = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

// Different Spans
export const NameSpan = styled.span`
  width: ${wd};
`;

export const ContentSpan = styled.span`
  width: ${wd};

  display: flex;
  div {
    cursor: pointer;
  }
  span {
    margin: 0 1rem;
  }
`;

export const AmountSpan = styled.span`
  width: ${wd};
`;

export const ClearSpan = styled.span`
  padding-left: 12px;
  cursor: pointer;
`;
