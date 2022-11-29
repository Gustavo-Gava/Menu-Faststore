import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  font-size: ${({ theme }) => theme.fonts.size.body.medium};

  button {
    border: none;
    background-color: transparent;
    padding: 0;
    display: inline-flex;
  }
`

export const HeaderHStack = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    font-weight: ${({ theme }) => theme.fonts.weight.light};
    font-size: ${({ theme }) => theme.fonts.size.body.medium};
  }
`

export const Content = styled.div`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const SeeAllLink = styled.a`
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fonts.weight.light};
  font-size: ${({ theme }) => theme.fonts.size.body.medium};
  color: ${({ theme }) => theme.colors.primary.default.active};
`
