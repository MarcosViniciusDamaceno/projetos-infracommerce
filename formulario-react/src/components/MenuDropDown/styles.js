import styled, { css } from "styled-components";

export const MenuDrop = styled.div`
  @media (max-width: 425px) {
    position: absolute;
    backdrop-filter: blur(3px);
    width: 100%;
    height: 100%;
    z-index: 100;

    display: flex;
    align-items: center;
    justify-content: center;

    background-image: linear-gradient(
      to right top,
      #717070,
      #7e7d7d,
      #8b8b8b,
      #989898,
      #a6a6a6,
      #b1b1b1,
      #bbbbbb,
      #c6c6c6,
      #d0d0d0,
      #dadada,
      #e4e4e4,
      #eeeeee
    );

    opacity: 0;
    pointer-events: none;

    transition: 0.5s;
    transform: translateY(0px);

    > svg {
      position: absolute;
      top: 20px;
      right: 20px;

      transform: rotate(45deg);
      transition: 0.7s;

      color: white;
    }

    nav {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      gap: 2rem;
      a:nth-child(1) {
        text-decoration: none;
        color: var(--primary);
        border-bottom: 1px solid var(--secondary);
      }
      a {
        text-decoration: none;
        color: var(--primary);
      }
    }

    ${({ isVisible }) =>
      isVisible &&
      css`
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0px);

        > svg {
          transform: rotate(0deg);
        }
      `}
  }

  @media (min-width: 426px) {
    display: none;
  }
`;
