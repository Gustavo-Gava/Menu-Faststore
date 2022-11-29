import styled from 'styled-components'
import { ButtonBack } from 'pure-react-carousel'

export const Container = styled(ButtonBack)`
  display: flex;
  position: absolute;
  left: 0;
  top: 40%;
  transform: translateY(-50%);

  &:disabled {
    svg {
      color: ${({ theme }) => theme.colors.primary.light.main};
    }
  }
`
