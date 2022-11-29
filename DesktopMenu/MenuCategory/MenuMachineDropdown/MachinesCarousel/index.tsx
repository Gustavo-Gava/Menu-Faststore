import useWindowSize from 'src/sdk/hooks/useWindowSize'
import theme from 'src/styles/theme/theme'

import * as S from './styles'
import type * as T from './types'
import { MachineCard } from '../MachineCard'
import { CustomLeftArrow } from './CustomLeftArrow'
import { CustomRightArrow } from './CustomRightArrow'

import '../../../../../../node_modules/pure-react-carousel/dist/react-carousel.es.css'

export const MachinesCarousel = ({ machines, setDropdownOpen }: T.MachinesCarouselProps) => {
  const { width } = useWindowSize()

  const visibleSlides = width <= theme.breakpoints.desktop ? 4 : 5

  const dotsQuantity = machines.length - visibleSlides + 2

  return (
    <S.Container
      naturalSlideWidth={200}
      naturalSlideHeight={260}
      isIntrinsicHeight
      totalSlides={machines.length}
      visibleSlides={visibleSlides}
    >
      <S.SliderStyled>
        {machines.map((machine, index) => (
          <S.SlideStyled key={machine.image.src} index={index}>
            <MachineCard machine={machine} setDropdownOpen={setDropdownOpen} />
          </S.SlideStyled>
        ))}
      </S.SliderStyled>

      <CustomLeftArrow />
      <CustomRightArrow />

      <S.DotGroupStyled
        showAsSelectedForCurrentSlideOnly
        totalSlides={machines.length}
        visibleSlides={visibleSlides}
        hideDotsFrom={dotsQuantity}
      />
    </S.Container>
  )
}
