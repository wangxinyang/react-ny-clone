/*
 * @Author: tosei
 * @Date: 2021-03-10 13:45:21
 * @LastEditors: tosei
 * @LastEditTime: 2021-03-10 13:53:06
 * @Description:先探知组件有没有被销毁
 */

import { useCallback, useEffect, useRef } from 'react'

function useMountedState(): () => boolean {
  const mountedRef = useRef(false)

  const get = useCallback(() => mountedRef.current, [])

  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  })

  return get
}

export default useMountedState
