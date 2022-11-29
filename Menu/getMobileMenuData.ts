import { api } from 'src/services/api'

import type * as T from './types'

export const getMobileMenuData = async (): Promise<T.MenuCMSResponseProps> => {
  const { data } = await api.get(`/cms/menu-mobile`)

  return data.data as T.MenuCMSResponseProps
}
