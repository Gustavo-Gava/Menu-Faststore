import type { ArrowProps } from 'react-multi-carousel'

import Icon from 'src/components/ui/Icon'

import * as S from './styles'

export const CustomLeftArrow = ({ onClick }: ArrowProps) => {
  return (
    <S.Container onClick={onClick}>
      <Icon name="CaretLeft" width={24} height={24} />
    </S.Container>
  )
}
