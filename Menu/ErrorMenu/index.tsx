import Image from 'next/image'

import Icon from 'src/components/ui/Icon'

import * as S from './styles'
import type * as T from './types'

export const ErrorMenu = ({ onClose }: T.ErrorContainerProps) => {
  return (
    <S.Container>
      <S.Header>
        <S.LogosWrapper>
          <Icon name="LogoMercafe" width={40} height={22} />
          <Icon name="LogoTresCoracoesExtenso" width={48} height={22} />
          <Image src="/images/logo_3c.png" width={30} height={30} alt="" />
        </S.LogosWrapper>

        <S.CloseButtonWrapper onClick={onClose}>
          <Icon name="X" width={28} height={28} />
        </S.CloseButtonWrapper>
      </S.Header>

      <S.Content>Lamentamos, mas não foi possível carregar os dados.</S.Content>
    </S.Container>
  )
}
