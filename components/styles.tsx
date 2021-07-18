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

export const Table = styled.table`
  border-radius: 1rem;
  border: 1px solid lightgray;
  background-color: lemonchiffon;
  width: 100%;
  padding: 0 0.5rem;
`;

export const Tr = styled.tr`
  margin: 0;
  padding: 1rem 0;
  min-height: 3rem;
  width: 100%;
  display: flex;

  th,
  td {
    height: 100%;
  }

  > :first-child {
    flex: 1;
  }

  > :not(:first-child) {
    width: 6.5rem;
  }
`;

export const TrSubHeading = styled(Tr)`
  align-items: center;
  background-color: azure;
`;

export const Thead = styled.thead`
  display: flex;
  border-bottom: 1px solid lightblue;
`;

export const Th = styled.th`
  justify-content: center;
`;

export const Tbody = styled.tbody`
  > * {
    border-bottom: 1px solid lightblue;
  }
`;

export const TaskCell = styled.td`
  padding: 0 0.5rem;
  line-height: 1.5rem;

  ul {
    margin: 0.5rem 0;
    padding-left: 2.5rem;
  }

  li {
    width: 100%;
    align-items: center;
    line-height: 1.5rem;
  }

  li:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

export const TaskCellText = styled.span`
  display: flex;
  align-items: center;
`;

export const CriteriaCell = styled.td`
  display: flex;
  justify-content: center;
`;

export const Tfooter = styled.tfoot`
  font-weight: 600;
`;

export const Input = styled.input`
  height: 2rem;
  width: 4rem;
  text-align: center;
  padding-left: 1rem;
`;

// export const InfoButton = styled.button`
//   border: 1px solid lightblue;
//   margin: 0 0.5rem;
//   height: 1rem;
//   width: 1rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 50%;
//   background-color: snow;
// `;

export const Tooltip = styled.span<{ show: boolean }>`
  display: none;

  ${({ show }) =>
    show &&
    css`
      display: flex;
      margin: 1rem;
      padding: 0 0.5rem;
      color: cornflowerblue;
      background-color: azure;
    `}
`;
