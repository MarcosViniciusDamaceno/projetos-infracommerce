import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1000px;
  width: 100%;

  max-height: 700px;
  height: 100%;

  margin: 50px 20px 10px 20px;
  padding-left: 50px;
  border-left: 1px solid var(--secondary);

  h3 {
    letter-spacing: 1.5px;
    font-size: 0.75rem;

    padding: 0 0 20px 0;

    margin-bottom: 20px;
    border-bottom: 1px solid var(--secondary);
  }

  div:nth-child(3) {
    width: 100%;

    margin-bottom: 20px;
  }
  @media (min-width: 426px) {
    > svg {
      display: none;
    }
  }
  @media (max-width: 425px) {
    > svg {
      display: block;

      position: absolute;
      left: 20px;
      top: 10px;
    }
    padding: 0px 10px 0px 20px;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;

  margin-bottom: 30px;
  h1 {
    letter-spacing: 2px;
    font-size: 100%;
  }
  p {
    font-size: 0.875rem;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;

  margin-bottom: 30px;

  h2 {
    letter-spacing: 2px;
    font-size: 100%;
  }

  span {
    display: flex;
    align-items: center;
    font-size: 0.875rem;

    b {
      margin-left: 10px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;

  max-width: 950px;
  width: 100%;

  max-height: 500px;
  height: 100%;

  gap: 5px;

  label {
    display: flex;
    flex-direction: column;

    font-size: 0.75rem;
    gap: 5px;

    width: 49%;
  }
  label:nth-child(3) {
    max-width: 700px;
    width: 100%;
  }
  label:nth-child(6) {
    height: 50px;
    margin-right: 300px;
  }
  label:nth-child(7) {
    max-width: 935px;
    width: 100%;
  }
  input {
    display: flex;
    width: 100%;
    height: 30px;

    padding: 10px;
  }

  select {
    width: 100%;
    height: 30px;

    padding-left: 30px;
    margin-right: 100px;

    font-size: 0.75rem;
    color: var(--secondary);
  }

  textarea {
    max-width: 935px;
    width: 100%;

    padding: 10px;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
    font-size: 0.875rem;
    width: 100%;

    padding: 5px 50px 5px 50px;

    color: var(--primary);
    background-color: var(--text-secondary);

    box-shadow: 6px 7px 3px -2px rgba(0, 0, 0, 0.25);
  }

  button:hover {
    font-size: 0.881rem;
  }
`;
