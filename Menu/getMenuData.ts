import { api } from 'src/services/api'

import type * as T from './types'

export const getMenuData = async (): Promise<T.MenuCMSResponseProps> => {
  const { data } = await api.get(`/cms/menu-desktop`)

  return data.data as T.MenuCMSResponseProps
}
