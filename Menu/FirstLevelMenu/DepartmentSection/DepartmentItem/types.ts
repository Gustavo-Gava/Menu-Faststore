import type { Department } from 'src/components/Menu/types'

export interface CategoryItemProps {
  department: Department
  onSelectCategory: (department: Department) => void
}
