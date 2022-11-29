import Link from 'next/link'

import * as S from './styles'
import type * as T from './types'
import { MenuCategoryDropdown } from './MenuCategoryDropdown'
import { MenuMachineDropdown } from './MenuMachineDropdown'

const MIN_CATEGORIES_FULL_WIDTH = 5

export const MenuCategory = ({
  department,
  isDropdownOpen,
  setDropdownOpen,
}: T.MenuCategoryProps) => {
  const decorativeImagesLength = department.decorativeImages?.length ?? 0
  const isFullWidth =
    department.categories?.length + decorativeImagesLength >=
      MIN_CATEGORIES_FULL_WIDTH ?? 0

  function handleMouseEnter() {
    if (department.categories) {
      setDropdownOpen(department.url)
      return
    }

    setDropdownOpen('')
  }

  const shouldRedirectToNewTab = department.url.startsWith('http')

  return (
    <S.Container
      $isFocused={isDropdownOpen}
      $isCategoryFullWidth={!!(isFullWidth || department.isMachine)}
    >
      <Link href={department.url} passHref scroll={false}>
        <S.CategoryName
          onClick={() => setDropdownOpen('')}
          onMouseEnter={handleMouseEnter}
          isOffer={department.label.toLowerCase() === 'ofertas'}
          target={shouldRedirectToNewTab ? '_blank' : '_self'}
        >
          {department.label}
        </S.CategoryName>
      </Link>

      {isDropdownOpen && (
        <S.DropdownWrapper>
          {department.isMachine ? (
            <MenuMachineDropdown
              isFullWidth
              department={department}
              setDropdownOpen={setDropdownOpen}
            />
          ) : (
            <MenuCategoryDropdown
              department={department}
              isFullWidth={isFullWidth}
              setDropdownOpen={setDropdownOpen}
            />
          )}
        </S.DropdownWrapper>
      )}
    </S.Container>
  )
}
