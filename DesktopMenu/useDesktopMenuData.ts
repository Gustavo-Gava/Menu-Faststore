import { useEffect, useState } from 'react'

import type { DepartmentSection } from '../Menu/types'
import { getDesktopMenuData } from './getDesktopMenuData'

export const useDesktopMenuData = () => {
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [departmentsSections, setDepartmentsSections] = useState<
    DepartmentSection[]
  >([])

  useEffect(() => {
    const getCategories = async () => {
      try {
        const menuCMSResponse = await getDesktopMenuData()

        setDepartmentsSections(menuCMSResponse.sections)
      } catch (err) {
        setError(true)
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    getCategories()
  }, [])

  return {
    departmentsSections,
    isLoading,
    error,
  }
}
