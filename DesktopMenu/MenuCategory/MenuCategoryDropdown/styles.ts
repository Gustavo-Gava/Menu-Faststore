import styled, { css } from 'styled-components'

import Container from 'src/components/sections/Container'

import type * as T from './types'

const SCROLLBAR_WIDTH = '10px'

const getContainerMaxHeight = () => {
  return css`
    max-height: 420px;
  `
}

export const MenuContainer = styled(Container)<T.DropdownStyledProps>`
  width: ${({ $isFullWidth }) =>
    $isFullWidth ? `calc(100vw - ${SCROLLBAR_WIDTH})` : 'auto'};
  background-color: ${({ theme, $isFullWidth }) =>
    $isFullWidth ? theme.colors.background.shape : 'transparent'};
  z-index: 3;
  border-top: 1px solid ${({ theme }) => theme.colors.valid[40]};
`

export const DropdownStyled = styled.div<T.DropdownStyledProps>`
  @keyframes fade-in {
    from {
      opacity: 0.5;
    }

    to {
      opacity: 1;
    }
  }

  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-height: 420px;
  max-width: ${({ theme }) => theme.breakpoints.desktop}px;
  margin: 0 auto;
  overflow-x: hidden;
  padding: 20px ${({ $isFullWidth }) => ($isFullWidth ? '0' : '30px')};
  background-color: ${({ theme }) => theme.colors.background.shape};
  z-index: 3;
  animation: fade-in 0.3s ease-in forwards;
`

export const FacetsList = styled.div``

export const FacetName = styled.h4`
  position: relative;
  text-align: left;
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  margin-bottom: 25px;

  /* this is necessary to code knows when break word or not */
  width: 150px;
  word-break: break-word;

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

export const DecorativeImagesWrapper = styled.div`
  width: max-content;
  display: flex;
  gap: 20px;

  > span {
    ${getContainerMaxHeight()};
    overflow: visible !important;
  }

  > span:not(:last-child)::after {
    content: '';
    height: 120px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -10px;
    background-color: ${({ theme }) => theme.colors.primary.default.active};
    width: 1px;
  }
`
