import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
`

export const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 40px;

  /* Simulate MenuContainer height to prevent layout shift */
  height: 40px;
`

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  background-color: ${({ theme }) => theme.colors.neutral.light};
  border-radius: ${({ theme }) => theme.border.radius.rounded};
`

export const Overlay = styled.div`
  @keyframes fade-in {
    from {
      opacity: 0.5;
    }

    to {
      opacity: 1;
    }
  }

  position: absolute;
  height: 100vh;
  width: calc(100vw - 10px);
  left: 50%;
  top: 65px;
  transform: translateX(-50%);
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.overlay.background};
  animation: fade-in 0.3s ease-in forwards;

  @media (max-width: ${(props) => props.theme.breakpoints.desktop}px) {
    top: 60px;
  }
`
