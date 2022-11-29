import { DepartmentSection } from './DepartmentSection'
import { FirstLevelMenuHeader } from './FirstLevelMenuHeader'
import * as S from './styles'
import type * as T from './types'

export const FirstLevelMenu = ({
  onClose,
  departmentsSections,
  onSelectCategory,
}: T.FirstLevelMenuProps) => {
  return (
    <>
      <FirstLevelMenuHeader onClose={onClose} />

      <S.Content>
        {departmentsSections.map((departmentSection) => (
          <DepartmentSection
            key={departmentSection.id}
            departments={departmentSection.data.departments}
            onSelectCategory={onSelectCategory}
          />
        ))}
      </S.Content>
    </>
  )
}
