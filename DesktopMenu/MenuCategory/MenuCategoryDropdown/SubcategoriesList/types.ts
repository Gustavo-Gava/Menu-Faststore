export interface FacetsValuesListProps {
  subcategories: Array<{
    label: string
    url: string
    highlighted: boolean
  }>
  categorySelected: string
  setDropdownOpen: (args: string) => void
}

export interface FacetValue {
  highlighted: boolean
}
