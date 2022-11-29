import Image from 'next/image'

import Icon from 'src/components/ui/Icon'

import logo3c from '../../../../../public/svg/logo_3c.svg'
import * as S from './styles'
import type * as T from './types'

export const FirstLevelMenuHeader = ({ onClose }: T.FirstLevelMenuProps) => {
  return (
    <S.Header>
      <span>Loja Oficial</span>

      <S.HeaderInfoWrapper>
        <S.LogosWrapper>
          <Icon name="LogoMercafe" width={40} height={22} />
          <Icon name="LogoTresCoracoesExtenso" width={48} height={22} />
          <Image src={logo3c} width={30} height={30} alt="" />
        </S.LogosWrapper>

        <S.CloseButtonWrapper onClick={onClose}>
          <Icon name="X" width={28} height={28} />
        </S.CloseButtonWrapper>
      </S.HeaderInfoWrapper>
    </S.Header>
  )
}
