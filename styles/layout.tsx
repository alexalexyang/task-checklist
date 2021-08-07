import styled, { css } from "styled-components";

export const Main = styled.main`
  height: 100%;
  width: 100%;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-bottom: 5rem;

  @media (min-width: 800px) {
    && {
      width: 800px;
    }
  }
`;

export const Header = styled.header`
  margin-top: 2rem;
  padding: 0 0.5rem;
  line-height: 1.5rem;

  > :first-child {
    margin-bottom: 2rem;
  }
`;

export const Footer = styled.footer`
  height: 15rem;
  width: 100%;
  margin-top: 5rem;
  border: 2px solid skyblue;
  background-color: floralwhite;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > * {
    height: 8rem;
    width: 8rem;
    border-radius: 50%;
    border: 2px solid cadetblue;
  }
`;
