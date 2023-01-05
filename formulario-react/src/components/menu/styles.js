import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 20vw;
  width: 100%;

  gap: 20px;

  margin: 50px 20px 10px 20px;

  div:nth-child(1) {
    border-bottom: 1px solid var(--secondary);
  }

  h3 {
    cursor: pointer;
    font-size: 14px;
    font-weight: normal;
    margin-bottom: 20px;
    color: var(--text-color);
  }
  h3:hover {
    font-size: 14.1px;
  }

  @media (max-width: 426px) {
    display: none;
  }
`;

export const MenuOne = styled.div`
  display: flex;
  flex-direction: column;

  gap: 15px;

  color: var(--text-color);

  p {
    cursor: pointer;
    font-size: 14px;
  }
  p:hover {
    font-size: 14.1px;
  }
`;
