import styled from "styled-components";

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const RoundButton = styled.button`
  border: 2px solid pink;
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
  background-color: blanchedalmond;

  :hover {
    background-color: lightcyan;
  }

  :active {
    background-color: lightgreen;
  }
`;

export const StyledImage = styled.img`
  border: 5px solid darkolivegreen;
  border-radius: 2rem;
  object-fit: contain;
`;

export const TextWrapper = styled.div`
  line-height: 1.5rem;

  > :not(:last-child) {
    margin-bottom: 1rem;
  }
`;
