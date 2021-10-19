import { useEffect, useRef } from 'react'

import ReactDOM from 'react-dom'

export function useKey(key, callback) {
  //to acess the list of key codes: https://keycode.info/
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  })

  useEffect(() => {
    function handleKeyPress(event) {
      if (event.code === key) {
        callbackRef.current(event)
      }

      document.addEventListener('keypress', handleKeyPress())
      return () => document.removeEventListener('keypress', handleKeyPress())
    }
  }, [key])
}
