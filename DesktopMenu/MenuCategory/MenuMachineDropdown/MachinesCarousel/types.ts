import type { Department } from 'src/components/Menu/types'

export interface MachinesCarouselProps {
  machines: Department['machinesAttributes']
  setDropdownOpen: (args: string) => void
}

export interface DotGroupStylesProps {
  hideDotsFrom: number
}
