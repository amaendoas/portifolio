import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: var(--header-height);
  right: 0;
  width: 100%;
`
  
  export const Wrapper = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: end;`

export const Card = styled.div`
  grid-area: subHeader;
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px;
  background-color: ${({theme}) => theme.COLORS.NEUTRAL_700};
  border: 1px solid ${({theme}) => theme.COLORS.TEXT};
  
`