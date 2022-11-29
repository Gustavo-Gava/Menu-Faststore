import type { ReactNode } from 'react'

import type { Category } from '../Menu/types'

export interface DesktopMenuProps {
  className?: string
}

interface MenuCategoriesProps {
  title: string
  id: string
  image: {
    url: string
    alt: string
  }
}

export interface MenuProps {
  children?: ReactNode
  menu: MenuCategoriesProps[]
}

export interface CategorySection {
  id: string
  name: string
  data: {
    categories: Category[]
  }
}

export interface MachineCTAProps {
  label: string
  url: string
}

export interface MachineBadgeProps {
  backgroundColor?: string
  text?: string
  textColor?: string
}

export interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  url?: string
}

export interface Machine {
  badge?: MachineBadgeProps
  cta?: MachineCTAProps
  image: ImageProps
  logo: ImageProps
}
