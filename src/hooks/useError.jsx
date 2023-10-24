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
    if (inputUser === ' ') {
      setError('You cannot send a space')
      return
    }
    if (inputUser.length > hiddenWord.length) {
      setError('The answer has more letters than the hidden word')
      return
    }
    if (inputUser.length < hiddenWord.length && inputUser.length > 1) {
      setError('The answer must be a letter or the whole word.')
      return
    }
    if (inputUser.match(/[0-9]/)) {
      setError('No numbers accepted')
      return
    }
    return setError(null)
  }, [inputUser])
  return { error, inputUser, setInputUser }
}
