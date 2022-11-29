import Icon from 'src/components/ui/Icon'

import * as S from './styles'
import type * as T from './types'

export const DepartmentItem = ({
  department,
  onSelectCategory,
}: T.CategoryItemProps) => {
  return (
    <S.MenuItem
      key={department.label}
      onClick={() => onSelectCategory(department)}
    >
      <S.MenuItemInfo>
        <S.Img src={department.image.src} alt={department.image.alt} />

        <S.MenuItemName>{department.label}</S.MenuItemName>
      </S.MenuItemInfo>

      <Icon name="CaretRight" />
    </S.MenuItem>
  )
}
