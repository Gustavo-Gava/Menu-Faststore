import Link from 'next/link'

import * as S from './styles'
import type * as T from './types'

export const MachineSubcategoriesList = ({
  subcategories,
  setDropdownOpen,
}: T.FacetsValuesListProps) => {
  return (
    <S.FacetValues>
      {subcategories.map((subcategory) => (
        <Link
          key={subcategory.url}
          href={subcategory.url}
          passHref
        >
          <S.FacetValue onClick={() => setDropdownOpen('')}>
            {subcategory.label}
          </S.FacetValue>
        </Link>
      ))}
    </S.FacetValues>
  )
}
