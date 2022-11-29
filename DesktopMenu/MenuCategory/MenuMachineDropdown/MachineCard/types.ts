import type { Machine } from 'src/components/DesktopMenu/types'

export interface MachineCardProps {
  machine: Machine
  setDropdownOpen: (args: string) => void
}
