import styled, { css } from 'styled-components'

import { AccordionItem } from 'src/components/ui/Accordion'

import * as T from './types'

const getButtonFontStyles = (isExpanded: boolean) => {
  if (isExpanded) {
    return css`
      font-weight: ${({ theme }) => theme.fonts.weight.medium};
      color: ${({ theme }) => theme.colors.primary.default.active};
    `
  }

  return css`
    font-weight: ${({ theme }) => theme.fonts.weight.regular};
    color: ${({ theme }) => theme.colors.secondary.default.active};
  `
}

export const AccordionItemStyled = styled(AccordionItem)`
  background-color: inherit;
  padding-bottom: 20px;
  border-color: ${({ theme }) => theme.colors.shade[20]};
  font-size: ${({ theme }) => theme.fonts.size.body.medium};
  font-weight: ${({ theme }) => theme.fonts.weight.light};
  color: ${({ theme }) => theme.colors.secondary.default.active};

  > button {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: inherit;
    padding: 6px;
    ${({ isExpanded }) => getButtonFontStyles(isExpanded)}
  }

  > div {
    padding: 6px;
  }
`

export const AccordionItemLink = styled.a<T.AccordionItemLink>`
  display: block;
  margin-bottom: 20px;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fonts.size.body.medium};
  color: ${({ theme, highlighted }) =>
    highlighted
      ? theme.colors.primary.default.main
      : theme.colors.secondary.default.active};
`

export const SeeAllLink = styled.a`
  text-decoration: none;
  font-size: ${({ theme }) => theme.fonts.size.body.medium};
  color: ${({ theme }) => theme.colors.primary.default.active};
`
