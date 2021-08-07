import styled, { css } from "styled-components";

export const Table = styled.table`
  border-radius: 1rem;
  border: 1px solid lightgray;
  background-color: lemonchiffon;
  width: 100%;

  @media only screen and (min-width: 410px) {
    padding: 0 0.5rem;
  }
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
  line-height: 1.5rem;

  ul {
    margin: 0.5rem 0;
    padding-left: 1.5rem;
  }

  li {
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
  height: 3rem;
  width: 3rem;
  border: 1px solid lightgray;
  background-color: lightyellow;
  border-radius: 50%;
  text-align: center;

  @media (pointer: fine) {
    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
      /* opacity: 1; */
      margin-left: -16px;
    }
  }
`;

export const Tooltip = styled.span<{ show: boolean }>`
  display: none;

  ${({ show }) =>
    show &&
    css`
      display: flex;
      margin: 1rem;
      color: cornflowerblue;
      background-color: azure;
    `}
`;
