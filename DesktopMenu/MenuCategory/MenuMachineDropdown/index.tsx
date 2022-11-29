import { MachinesCarousel } from './MachinesCarousel'
import { MachineSubcategoriesList } from './MachineSubcategoriesList'
import * as S from './styles'
import type * as T from './types'

export const MenuMachineDropdown = ({
  setDropdownOpen,
  department,
}: T.MenuCategoryDropdownProps) => {
  return (
    <S.MenuContainer $isFullWidth>
      <S.DropdownStyled onMouseLeave={() => setDropdownOpen('')}>
        <S.FacetsWrapper>
          {department?.categories.map((category) => (
            <S.FacetsList key={category.label}>
              <S.FacetName onClick={() => setDropdownOpen("")}>{category.label}</S.FacetName>

              <MachineSubcategoriesList
                subcategories={category.subcategories}
                setDropdownOpen={setDropdownOpen}
              />
            </S.FacetsList>
          ))}
        </S.FacetsWrapper>

        <MachinesCarousel machines={department?.machinesAttributes} setDropdownOpen={setDropdownOpen} />
      </S.DropdownStyled>
    </S.MenuContainer>
  )
}
