import { useState, useEffect, useCallback } from 'react'
import axiosInstance from '../utils/axios'
import { AxiosRequestConfig } from 'axios'

interface UseAxiosOptions {
  manual?: boolean
  initialData?: any
  onSuccess?: (data: any) => void
  onError?: (error: any) => void
}

const useAxios = (url: string, options: UseAxiosOptions = {}, config?: AxiosRequestConfig) => {
  const { manual = false, initialData = null, onSuccess, onError } = options

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(initialData)
  const [error, setError] = useState(null as any)

  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const response = await axiosInstance(url, config)
      setData(response.data)
      if (onSuccess) onSuccess(response.data)
    } catch (err) {
      setError(err)
      if (onError) onError(err)
    } finally {
      setLoading(false)
    }
  }, [url, config, onSuccess, onError])

  useEffect(() => {
    if (!manual) {
      fetchData()
    }
  }, [fetchData, manual])

  const refetch = () => {
    fetchData()
  }

  return { loading, data, error, refetch }
}

export default useAxios
