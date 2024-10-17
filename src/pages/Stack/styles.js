import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100%;
  grid-area: content;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .smile, .heart {
    position: absolute;
  }

  .smile {
    width: clamp(10rem, 10rem + 10vw, 12rem);
    top: -2rem;
    right: 0;
    z-index: 1;
  }

  .heart {
    bottom: 3.5rem;
    left: 2rem;
    z-index: 1;
  }


  }

  @media (min-width: 1080px) {
    .smile {
      right: 1rem;
    }

    .heart {
      width: 7rem;
      left: 4rem;
    }

  }
`

export const Content = styled.div`
  max-height: 70vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
  position: relative;
  gap: 1rem;
  animation: downtop 1s backwards;
  overflow-y: auto;
  scrollbar-color: ${({ theme }) => theme.COLORS.PINK_S} ${({theme}) => theme.COLORS.NEUTRAL_700} !important;
  scrollbar-width: thin;
  ::-webkit-scrollbar {
    width: 11px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: ${({ theme }) => theme.COLORS.NEUTRAL_700};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.COLORS.PINK_S};
    border: 1px solid #5c5c5c;
    box-shadow: inset -3px -3px 2px 1px ${({ theme }) => theme.COLORS.PINK_P};
  }
`