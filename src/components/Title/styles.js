import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 0.5rem 2rem;
  border-width: 1px;
  border: 1px solid ${({ theme }) => theme.COLORS.TEXT};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  animation: downtop 1s backwards;

  h1 {
    font-size: 2.5rem;
    letter-spacing: -0.05em;
  }

  span {
    color: ${({ theme }) => theme.COLORS.PINK_P};
  }
`