import styled from "styled-components";

export const StyledWhiteButton = styled.button`
  --green: rgb(1, 135, 98);
  border: 2px solid var(--green);
  border-radius: 8px;
  padding: 10px 25px;
  background-color: transparent;
  color: var(--green);
  font-size: 1.125rem;
  width: 100%;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: var(--green);
  }
`;
export const StyledGreenButton = styled.button`
  --green: rgb(1, 135, 98);
  border: 2px solid var(--green);
  --dark-green: rgb(0, 101, 73);
  border-radius: 8px;
  padding: 10px 25px;
  font-weight: bold;
  background-color: var(--green);
  color: white;
  font-size: 1.125rem;
  width: 100%;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: var(--dark-green);
  }
`;
