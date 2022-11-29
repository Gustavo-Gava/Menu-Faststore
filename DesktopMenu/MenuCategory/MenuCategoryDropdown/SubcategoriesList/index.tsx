import Link from 'next/link'

import * as S from './styles'
import type * as T from './types'

const MAX_FACET_VALUES = 15

export const SubcategoriesList = ({
  subcategories,
  categorySelected,
  setDropdownOpen,
}: T.FacetsValuesListProps) => {
  const subcategoryWithLimit = subcategories.slice(0, MAX_FACET_VALUES)

  return (
    <S.FacetValues>
      {subcategoryWithLimit.map((subcategory) => (
        <Link key={subcategory.url} href={subcategory.url} passHref>
          <S.FacetValue
            highlighted={subcategory.highlighted}
            onClick={() => setDropdownOpen('')}
          >
            {subcategory.label}
          </S.FacetValue>
        </Link>
      ))}

      {subcategoryWithLimit.length > MAX_FACET_VALUES && (
        <Link
          href={`/${categorySelected}`}
          onClick={() => setDropdownOpen('')}
          passHref
        >
          <S.HighlightedLink>Ver Todos</S.HighlightedLink>
        </Link>
      )}
    </S.FacetValues>
  )
}
