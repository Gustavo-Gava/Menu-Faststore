import { api } from 'src/services/api'

import type { MenuCMSResponseProps } from '../Menu/types'

export const getDesktopMenuData = async (): Promise<MenuCMSResponseProps> => {
  const { data } = await api.get(`/cms/menu-desktop`)

  return data.data as MenuCMSResponseProps
}
