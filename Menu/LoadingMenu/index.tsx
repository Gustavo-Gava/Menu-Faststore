import { ClipLoader } from 'react-spinners'
import type { LoaderSizeProps } from 'react-spinners/helpers/props'

import theme from 'src/styles/theme/theme'

import * as S from './styles'

export const LoadingMenu = ({ ...rest }: LoaderSizeProps) => {
  return (
    <S.Container>
      <ClipLoader
        color={theme.colors.primary.default.active}
        size={24}
        {...rest}
      />
    </S.Container>
  )
}
