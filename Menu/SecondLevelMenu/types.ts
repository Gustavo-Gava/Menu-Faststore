import type { Department } from '../types'

export interface SecondLevelMenuInterface {
  departmentSelected: Department
  onCategoryDismiss: () => void
  onClose: () => void
}
