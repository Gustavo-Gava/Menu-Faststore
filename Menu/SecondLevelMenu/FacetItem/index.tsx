import Link from 'next/link'

import Accordion from 'src/components/ui/Accordion'
import { useUI } from 'src/sdk/ui/Provider'

import * as S from './styles'
import type * as T from './types'

export const FacetItem = ({
  onChange,
  indicesExpanded,
  index,
  item,
  departmentUrl,
}: T.FacetItemProps) => {
  const { closeNavbar } = useUI()

  return (
    <Accordion onChange={onChange} expandedIndices={indicesExpanded}>
      <S.AccordionItemStyled
        index={index}
        buttonLabel={item.label}
        isExpanded={indicesExpanded.has(index)}
        iconOpen="CaretUp"
        iconClose="CaretDown"
      >
        <>
          {item.subcategories.map((subcategory) => (
            <Link
              key={subcategory.label}
              href={subcategory.url}
              scroll={false}
              passHref
            >
              <S.AccordionItemLink
                highlighted={subcategory.highlighted}
                onClick={closeNavbar}
              >
                {subcategory.label}
              </S.AccordionItemLink>
            </Link>
          ))}

          <Link href={departmentUrl} scroll={false} passHref>
            <S.SeeAllLink onClick={closeNavbar}>Ver Todos</S.SeeAllLink>
          </Link>
        </>
      </S.AccordionItemStyled>
    </Accordion>
  )
}
