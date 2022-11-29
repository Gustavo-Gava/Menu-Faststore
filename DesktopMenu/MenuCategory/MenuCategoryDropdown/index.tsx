import Image from 'next/image'

import { SubcategoriesList } from './SubcategoriesList'
import Link from 'next/link'

import * as S from './styles'

import type { ImageProps } from '../../types'
import type * as T from './types'

export const MenuCategoryDropdown = ({
  setDropdownOpen,
  department,
  isFullWidth,
}: T.MenuCategoryDropdownProps) => {
  return (
    <S.MenuContainer $isFullWidth={isFullWidth}>
      <S.DropdownStyled
        $isFullWidth={isFullWidth}
        onMouseLeave={() => setDropdownOpen('')}
      >
        {department?.categories?.map((category) => (
          <S.FacetsList key={category.label}>
            <S.FacetName onClick={() => setDropdownOpen('')}>
              {category.label}
            </S.FacetName>

            <SubcategoriesList
              categorySelected={department.url}
              subcategories={category.subcategories}
              setDropdownOpen={setDropdownOpen}
            />
          </S.FacetsList>
        ))}

        <S.DecorativeImagesWrapper>
          {department?.decorativeImages?.map((image: ImageProps) => (
            <Link key={image.src} href={image?.url ?? '/'} passHref>
              <a>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width ?? 300}
                  height={image.height ?? 400}
                />
              </a>
            </Link>
          ))}
        </S.DecorativeImagesWrapper>
      </S.DropdownStyled>
    </S.MenuContainer>
  )
}
