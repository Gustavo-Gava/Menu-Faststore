import styled from 'styled-components'

import * as T from './types'

export const FacetValues = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: left;
  font-size: ${({ theme }) => theme.fonts.size.body.medium};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  color: ${({ theme }) => theme.colors.secondary.dark.active};
`

export const FacetValue = styled.a<T.FacetValue>`
  text-decoration: none;
  color: ${({ theme, highlighted }) =>
    highlighted
      ? theme.colors.primary.default.main
      : theme.colors.secondary.dark.active};

  &:visited {
    color: ${({ theme }) => theme.colors.secondary.dark.active};
  }

  &:hover {
    text-decoration: underline;
  }
`

export const HighlightedLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary.default.active};

  &:visited {
    color: ${({ theme }) => theme.colors.primary.default.active};
  }

  &:hover {
    text-decoration: underline;
  }
`
