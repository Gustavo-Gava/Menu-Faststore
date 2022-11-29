import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 16px;
  width: 200px;

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 200px;
  cursor: pointer;
`

export const LogoWrapper = styled.div``

export const BadgeWrapper = styled.div`
  position: absolute;
  bottom: 0;

  span {
    font-size: ${({ theme }) => theme.fonts.size.body.extraSmall};
    padding: 0;
  }
`
