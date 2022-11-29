import styled from 'styled-components'

import Container from 'src/components/sections/Container'

import type * as T from './types'

const SCROLLBAR_WIDTH = '10px'

export const MenuContainer = styled(
  Container
)<T.MenuCategoryDropdownStylesProps>`
  width: ${({ $isFullWidth }) =>
    $isFullWidth ? `calc(100vw - ${SCROLLBAR_WIDTH})` : 'auto'};
  background-color: ${({ theme }) => theme.colors.background.shape};
  z-index: 3;
  border-top: 1px solid ${({ theme }) => theme.colors.valid[40]};
`

export const DropdownStyled = styled.div`
  @keyframes fade-in {
    from {
      opacity: 0.5;
    }

    to {
      opacity: 1;
    }
  }

  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.desktop}px;
  margin: 0 auto;
  overflow-x: hidden;
  padding: 20px 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background.shape};
  animation: fade-in 0.3s ease-in forwards;
`

export const FacetsList = styled.div``

export const FacetName = styled.h4`
  position: relative;
  text-align: left;
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  margin-bottom: 15px;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary.default.active};
  }
`

export const FacetsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
