import type { Department } from 'src/components/Menu/types'

export interface MenuCategoryProps {
  setDropdownOpen: (value: string) => void
  isDropdownOpen: boolean
  department: Department
}

export interface CategoryContainerProps {
  $isFocused: boolean
  $isCategoryFullWidth: boolean
}

export interface CategoryName {
  isOffer: boolean
}
