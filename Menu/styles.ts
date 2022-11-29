import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.shade[10]};
  overflow-y: auto;
  height: 100%;
`
