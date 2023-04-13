import { useEffect, useState, useRef } from 'react'

export function useErrorInput ({ hiddenWord }) {
  const [inputUser, setInputUser] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = inputUser === ''
      return
    }
    if (inputUser.length > hiddenWord.length) {
      setError('La respuesta tiene mas letras que la palabra escondida')
      return
    }
    if (inputUser.length < hiddenWord.length && inputUser.length > 1) {
      setError('La respuesta debe ser una letra o la palabra completa')
      return
    }
    if (inputUser.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }
    return setError(null)
  }, [inputUser])
  return { error, inputUser, setInputUser }
}
