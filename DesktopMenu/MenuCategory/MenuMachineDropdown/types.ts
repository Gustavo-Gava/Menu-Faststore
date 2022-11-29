import type { Department } from 'src/components/Menu/types'

export interface MenuCategoryDropdownProps {
  department: Department
  setDropdownOpen: (value: string) => void
  isFullWidth: boolean
}

export interface MenuCategoryDropdownStylesProps {
  $isFullWidth: boolean
}
