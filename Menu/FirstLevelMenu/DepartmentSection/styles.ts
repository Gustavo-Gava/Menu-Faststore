import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const CategorySection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.shade[20]};
    padding-bottom: 20px;
  }
`
