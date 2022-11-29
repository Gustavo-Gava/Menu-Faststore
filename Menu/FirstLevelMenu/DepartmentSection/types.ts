import type { Department } from '../../types'

export interface CategorySectionProps {
  departments: Department[]
  onSelectCategory: (department: Department) => void
}
