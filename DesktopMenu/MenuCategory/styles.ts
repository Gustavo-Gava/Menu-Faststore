import styled, { css } from 'styled-components'

import type * as T from './types'

const getCategoryNameStyles = (
  $isFocused: T.CategoryContainerProps['$isFocused']
) => {
  if ($isFocused) {
    return css`
      border-bottom: 3px solid
        ${({ theme }) => theme.colors.primary.default.active};
      color: ${({ theme }) => theme.colors.primary.default.active};
    `
  }

  return css`
    color: var(--menu-category-name-color);
    background-color: var(--menu-category-name-background-color);
  `
}

const getCategoryNameWidth = (
  isFullWidth: T.CategoryContainerProps['$isCategoryFullWidth']
) => {
  if (isFullWidth) {
    return css`
      position: static;
    `
  }

  return css`
    position: relative;

    /*
      These styles is applied to menu dropdown container because when is on laptop screens,
      the first and last menu dropdown went out of screen
    */
    &:first-child {
      > div {
        left: -40px;
        right: unset;
        transform: unset;
      }
    }

    &:nth-last-child(2) {
      > div {
        left: unset;
      }
    }

    &:last-child {
      > div {
        right: -40px;
        left: unset;
        transform: unset;
      }
    }
  `
}

export const Container = styled.div<T.CategoryContainerProps>`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  border-bottom: 3px solid transparent;

  &:hover {
    ${getCategoryNameStyles(true)}
  }

  ${({ $isFocused }) => getCategoryNameStyles($isFocused)}
  ${({ $isCategoryFullWidth }) => getCategoryNameWidth($isCategoryFullWidth)}
`

export const DropdownWrapper = styled.div`
  top: 65px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  z-index: 99999;
  max-height: 200px;

  @media (max-width: ${(props) => props.theme.breakpoints.desktop}px) {
    top: 60px;
  }
`

export const CategoryName = styled.a<T.CategoryName>`
  height: 100%;
  padding: 15px 0;
  margin: 0 auto;
  border-width: 3px;
  transition: all 0.1s;
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  ${({ isOffer, theme }) =>
    isOffer && `color: ${theme.colors.primary.default.main}`}
`
