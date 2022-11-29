import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 10px;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  background-color: ${({ theme }) => theme.colors.background.shape};
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

export const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`
