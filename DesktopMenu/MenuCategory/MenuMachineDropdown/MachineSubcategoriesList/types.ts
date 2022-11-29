export interface FacetsValuesListProps {
  subcategories: Array<{
    label: string
    url: string
  }>,
  setDropdownOpen: (args: string) => void
}
