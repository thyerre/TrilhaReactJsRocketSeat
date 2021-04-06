import styled from "styled-components";

interface strongValueProps {
  total: number;
}

export const Container = styled.div<strongValueProps>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    &.highlight-background {
      background: ${({ total }) => {
        console.log(total);
        if (total < -300) {
          return "#E52e4d";
        }

        if (total < 0 && total > -300) {
          return "#ff4700";
        }

        return "#33cc95";
      }};
      color: #fff;
    }
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;

    &.up {
      color: var(--red);
    }
  }
`;
