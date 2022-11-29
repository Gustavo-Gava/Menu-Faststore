import Link from 'next/link'
import { useState } from 'react'

import Icon from 'src/components/ui/Icon'
import { useUI } from 'src/sdk/ui/Provider'

import { FacetItem } from './FacetItem'
import * as S from './styles'
import type * as T from './types'

export const SecondLevelMenu = ({
  departmentSelected,
  onCategoryDismiss,
  onClose,
}: T.SecondLevelMenuInterface) => {
  const { closeNavbar } = useUI()
  const [indicesExpanded, setIndicesExpanded] = useState<Set<number>>(
    new Set([])
  )

  const onChange = (index: number) => {
    if (indicesExpanded.has(index)) {
      indicesExpanded.delete(index)
      setIndicesExpanded(new Set(indicesExpanded))
    } else {
      setIndicesExpanded(new Set(indicesExpanded.add(index)))
    }
  }

  return (
    <S.Container>
      <S.Header>
        <S.HeaderHStack>
          <button onClick={onCategoryDismiss}>
            <Icon name="CaretLeft" width={24} height={24} />
          </button>

          <span>
            {departmentSelected.label} /{' '}
            <Link href={departmentSelected.url} scroll={false} passHref>
              <S.SeeAllLink onClick={onClose}>VER TODOS</S.SeeAllLink>
            </Link>
          </span>
        </S.HeaderHStack>

        <button onClick={closeNavbar} aria-label="Fechar Menu">
          <Icon name="X" width={24} height={24} />
        </button>
      </S.Header>

      <S.Content>
        {departmentSelected.categories?.map((item, index) => (
          <FacetItem
            onChange={onChange}
            indicesExpanded={indicesExpanded}
            key={item?.label}
            index={index}
            item={item}
            departmentUrl={departmentSelected.url}
          />
        ))}
      </S.Content>
    </S.Container>
  )
}
