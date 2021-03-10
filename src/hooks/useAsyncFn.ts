import { useCallback, useRef, useState } from 'react'
import useMountedState from './useMountedState'

export type AsyncState<T> =
  | {
      loading: boolean
      error?: undefined
      value?: undefined
    }
  | {
      loading: false
      error: Error
      value?: undefined
    }
  | {
      loading: false
      error?: undefined
      value: T
    }

export type AsyncResp<Result = any, Args extends any[] = any[]> = [
  AsyncState<Result>,
  (...args: Args) => Promise<Result | null>,
]

export interface IOptions<Result> {
  initialState: AsyncState<Result>
  successHandler?: (value: Result) => void
  errorHandler?: (error: Error) => void
}

function useAsyncFn<Args extends any[], Result = any>(
  fn: (...args: Args) => Promise<Result>,
  options: IOptions<Result> = {
    initialState: { loading: true },
  },
): AsyncResp<Result, Args> {
  const { initialState = { loading: true } } = options
  const [state, setState] = useState<AsyncState<Result>>(initialState)
  const lastCallId = useRef(0)
  // 获取mount
  const isMounted = useMountedState()

  const callback = useCallback((...args: Args) => {
    const callId = ++lastCallId.current

    return fn(...args).then(
      (value) => {
        const callback = args[args.length - 1]
        if (isMounted() && callId === lastCallId.current) {
          if (typeof callback === 'function') {
            callback()
          }
          setState({ value, loading: false })
        }
        return value
      },
      (error) => {
        if (isMounted && callId === lastCallId.current) {
          setState({ error, loading: false })
        }
        return null
      },
    )
  }, [])

  return [state, callback]
}

export default useAsyncFn
