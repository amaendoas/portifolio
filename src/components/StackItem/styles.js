import styled from "styled-components";

export const Container = styled.div`
  width: 15rem;
  height: 15rem;
  border: 1px solid ${({theme}) => theme.TITLE === 'light' ? theme.COLORS.TEXT : theme.COLORS.NEUTRAL_700};
  background-color: ${({theme}) => theme.COLORS.NEUTRAL_700};
  box-shadow: 4px 4px 0px ${({theme}) => theme.COLORS.TEXT};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const Item = styled.div`
  gap: 1.3rem;
  font-family: 'Press Start 2P', cursive;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 1.5rem;
  }
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 100%;
`