import type { Category } from '../../types'

export interface FacetItemProps {
  onChange: (index: number) => void
  indicesExpanded: Set<number>
  item: Category
  index: number
  departmentUrl: string
}

export interface AccordionItemLink {
  highlighted: boolean
}
