import axios from 'axios'

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5566', // Pointing to the mock server
  timeout: 1000,
})

// Add a request interceptor
axiosInstance.interceptors.request.use(
  config => {
    // Add auth token to headers before the request is sent
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
        console.log('has token', token)
      } else {
         console.log('no token')
      }
    }
    return config
  },
  error => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axiosInstance.interceptors.response.use(
  response => {
    // Any status code that lies within the range of 2xx causes this function to trigger
    return response
  },
  error => {
    // Any status codes that fall outside the range of 2xx cause this function to trigger
    if (error?.response?.status === 401) {
      // Handle unauthorized error
      console.error('Unauthorized access - perhaps redirect to login')
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
