import styled from 'styled-components'
import { ButtonNext } from 'pure-react-carousel'

export const Container = styled(ButtonNext)`
  display: flex;
  position: absolute;
  right: 0;
  top: 40%;
  transform: translateY(-50%);

  &:disabled {
    svg {
      color: ${({ theme }) => theme.colors.primary.light.main};
    }
  }
`
