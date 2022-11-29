import { useEffect, useState } from 'react'

import { getMobileMenuData } from './getMobileMenuData'
import type * as T from './types'

export const useMobileMenuData = () => {
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [departmentsSections, setDepartmentsSections] = useState<
    T.DepartmentSection[]
  >([])

  useEffect(() => {
    const getCategories = async () => {
      try {
        const menuCMSResponse = await getMobileMenuData()

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
