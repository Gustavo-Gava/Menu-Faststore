import type { Department, DepartmentSection } from '../types'

export interface FirstLevelMenuProps {
  onClose: () => void
  onSelectCategory: (department: Department) => void
  departmentsSections: DepartmentSection[]
}
