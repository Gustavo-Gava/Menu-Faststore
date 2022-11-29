import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

import Badge from 'src/components/ui/Badge'
import { Button } from 'src/components/ui'
// import UILink from 'src/components/ui/Link'

import type * as T from './types'
import * as S from './styles'

const DEFAULT_IMAGE_HEIGHT = 100
const DEFAULT_IMAGE_WIDTH = 100
const DEFAULT_LOGO_WIDTH = 50
const DEFAULT_LOGO_HEIGHT = 50

export const MachineCard = ({ machine, setDropdownOpen }: T.MachineCardProps) => {
  const router = useRouter()

  return (
    <S.Container
      onClick={() => {
        setDropdownOpen("")
        router.push(machine.cta?.url ?? '#')
      }}
    >
      <S.ImageWrapper>
        <Image
          src={machine.image.src}
          alt={machine.image.alt}
          height={machine.image.height ?? DEFAULT_IMAGE_HEIGHT}
          width={machine.image?.width ?? DEFAULT_IMAGE_WIDTH}
        />

        <S.BadgeWrapper>
          <Badge
            textColor={machine.badge?.textColor}
            backgroundColor={machine.badge?.backgroundColor}
          >
            {machine.badge?.text}
          </Badge>
        </S.BadgeWrapper>
      </S.ImageWrapper>

      <S.LogoWrapper>
        <Image
          src={machine.logo.src}
          alt={machine.logo.alt}
          width={machine?.logo?.width ?? DEFAULT_LOGO_WIDTH}
          height={machine?.logo?.height ?? DEFAULT_LOGO_HEIGHT}
        />
      </S.LogoWrapper>

      <Button variant="primary" inverse onClick={() => setDropdownOpen("")}>
        <Link href={machine.cta?.url ?? '#'}>
          {machine.cta?.label ?? 'Conhecerrr'}
        </Link>
      </Button>
    </S.Container>
  )
}
