import { useState } from 'react'

import { Spinner } from '../ui/Spinner'
import { MenuCategory } from './MenuCategory'
import * as S from './styles'
import type * as T from './types'
import { useDesktopMenuData } from './useDesktopMenuData'

export const DesktopMenu = ({ className }: T.DesktopMenuProps) => {
  const [dropdownOpen, setDropdownOpen] = useState('')
  const { departmentsSections, isLoading } = useDesktopMenuData()

  function handleMouseLeave(event: React.MouseEvent) {
    const mouseLocationRelatedToContainer = event.nativeEvent.offsetY
    const isMouseOutsideContainerOverTop = mouseLocationRelatedToContainer < 0

    if (isMouseOutsideContainerOverTop) {
      setDropdownOpen('')
    }
  }

  if (isLoading) {
    return (
      <S.LoadingContainer>
        <Spinner />
      </S.LoadingContainer>
    )
  }

  if (!departmentsSections) {
    return <></>
  }

  return (
    <S.Container
      className={className}
      onMouseLeave={(e) => handleMouseLeave(e)}
    >
      <S.MenuContainer>
        {departmentsSections.map((departmentSection) =>
          departmentSection.data.departments.map((department) => (
            <MenuCategory
              key={department.url}
              department={department}
              isDropdownOpen={dropdownOpen === department.url}
              setDropdownOpen={setDropdownOpen}
            />
          ))
        )}
      </S.MenuContainer>

      {dropdownOpen && <S.Overlay />}
    </S.Container>
  )
}
