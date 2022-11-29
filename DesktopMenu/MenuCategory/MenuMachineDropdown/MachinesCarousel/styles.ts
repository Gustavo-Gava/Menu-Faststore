import styled from 'styled-components'
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel'

import type * as T from './types'

export const Container = styled(CarouselProvider)`
  position: relative;

  .carousel__slide {
    > div > div {
      margin: 0 auto;
    }

    &[aria-selected='true'] {
      &:has(+ [aria-selected='true'])::after {
        content: '';
        height: 100px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        background-color: ${({ theme }) => theme.colors.primary.default.active};
        width: 1px;
      }
    }
  }
`

export const SliderStyled = styled(Slider)`
  height: fit-content;
  width: 1300px;
  padding: 0 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}px) {
    margin: 0 auto;
    width: 1100px;
  }
`

export const SlideStyled = styled(Slide)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
`

export const DotGroupStyled = styled(DotGroup)<T.DotGroupStylesProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin: 26px 0 6px;

  .carousel__dot {
    width: 8px;
    height: 8px;
    border-radius: ${({ theme }) => theme.border.radius.full};
    border: 1px solid ${({ theme }) => theme.colors.primary.default.active};

    /*
      this is necessary because lib shows
      dots for all elements, not for slides quantity
    */
    &:nth-child(n + ${({ hideDotsFrom }) => hideDotsFrom}) {
      display: none;
    }
  }

  .carousel__dot--selected {
    background-color: ${({ theme }) => theme.colors.primary.default.active};
  }
`
