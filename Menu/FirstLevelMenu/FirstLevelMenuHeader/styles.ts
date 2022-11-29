import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  background-color: ${({ theme }) => theme.colors.background.shape};

  span {
    font-size: ${({ theme }) => theme.fonts.size.body.extraSmall};
    color: ${({ theme }) => theme.colors.secondary.default.active};
  }
`

export const HeaderInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LogosWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const CloseButtonWrapper = styled.button`
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: none;
  display: inline-block;
`
