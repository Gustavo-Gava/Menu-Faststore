import type {
  ImageProps,
  MachineBadgeProps,
  MachineCTAProps,
} from '../DesktopMenu/types'

export interface MenuCMSResponseProps {
  id: string
  name: string
  sections: DepartmentSection[]
}

export interface DepartmentSection {
  id: string
  name: string
  data: {
    departments: Department[]
  }
}

export interface Department {
  categories: Category[]
  image: {
    src: string
    alt: string
  }
  label: string
  url: string
  isMachine: boolean
  machinesAttributes: MachineAttributes[]
  decorativeImages?: DecorativeImages[]
}

export interface Category {
  label: string
  subcategories: Subcategory[]
}

export interface Subcategory {
  label: string
  url: string
  highlighted: boolean
}

export interface DecorativeImages {
  src: string
  alt: string
  width: number
  height: number
}

export interface MachineAttributes {
  badge?: MachineBadgeProps
  cta?: MachineCTAProps
  image: ImageProps
  logo: ImageProps
}
