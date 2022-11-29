import { DepartmentItem } from './DepartmentItem'
import * as S from './styles'
import type * as T from './types'

export const DepartmentSection = ({
  departments,
  onSelectCategory,
}: T.CategorySectionProps) => {
  return (
    <S.CategorySection>
      {departments.map((department) => (
        <DepartmentItem
          key={department.label}
          department={department}
          onSelectCategory={onSelectCategory}
        />
      ))}
    </S.CategorySection>
  )
}
