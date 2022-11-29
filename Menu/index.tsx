import { useState } from 'react'

import { useUI } from 'src/sdk/ui/Provider'
import { useFadeEffect } from 'src/sdk/ui/useFadeEffect'

import SlideOver from '../ui/SlideOver'
import { ErrorMenu } from './ErrorMenu'
import { FirstLevelMenu } from './FirstLevelMenu'
import { LoadingMenu } from './LoadingMenu'
import { SecondLevelMenu } from './SecondLevelMenu'
import * as S from './styles'
import type * as T from './types'
import { useMobileMenuData } from './useMobileMenuData'

export const Menu = () => {
  const { departmentsSections, error, isLoading } = useMobileMenuData()
  const [departmentSelected, setDepartmentSelected] =
    useState<T.Department | null>(null)

  const { navbar: displayNavbar, closeNavbar } = useUI()
  const { fade, fadeOut } = useFadeEffect()

  if (isLoading) {
    return (
      <SlideOver
        isOpen={displayNavbar}
        direction="leftSide"
        size="partialMobile"
        fade={fade}
        onDismiss={fadeOut}
        onTransitionEnd={() => fade === 'out' && closeNavbar()}
      >
        <S.Container>
          <LoadingMenu />
        </S.Container>
      </SlideOver>
    )
  }

  if (error) {
    return (
      <SlideOver
        isOpen={displayNavbar}
        direction="leftSide"
        size="partialMobile"
        fade={fade}
        onDismiss={fadeOut}
        onTransitionEnd={() => fade === 'out' && closeNavbar()}
      >
        <S.Container>
          <ErrorMenu onClose={fadeOut} />
        </S.Container>
      </SlideOver>
    )
  }

  return (
    <SlideOver
      isOpen={displayNavbar}
      direction="leftSide"
      size="partialMobile"
      fade={fade}
      onDismiss={fadeOut}
      onTransitionEnd={() => fade === 'out' && closeNavbar()}
    >
      <S.Container>
        {departmentSelected ? (
          <SecondLevelMenu
            departmentSelected={departmentSelected}
            onClose={fadeOut}
            onCategoryDismiss={() => setDepartmentSelected(null)}
          />
        ) : (
          <FirstLevelMenu
            departmentsSections={departmentsSections}
            onClose={fadeOut}
            onSelectCategory={setDepartmentSelected}
          />
        )}
      </S.Container>
    </SlideOver>
  )
}

export default Menu
