import { useState, useEffect, useRef } from "react";

function useLocalStorageState(
  key,
  defaultValue = '', // you can pass in a function
  {serialize = JSON.stringify, deserialize = JSON.parse} = {},
) {
  // pass fx to useState for lazy initialization
  const [state, setState] = useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key)
    if (valueInLocalStorage) {
      return deserialize(valueInLocalStorage)
    }
    return typeof defaultValue === 'function' ? defaultValue() : defaultValue
  })

  const prevKeyRef = useRef(key)

  useEffect(() => {
    const prevKey = prevKeyRef.current
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey)
    }
    prevKeyRef.current = key
    window.localStorage.setItem(key, serialize(state))
  }, [key, state, serialize])

  console.info("Localstorage data: ", state);
  return [state, setState];
}

export  {useLocalStorageState}