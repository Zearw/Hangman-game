import { useEffect, useState } from 'react'

export function useHandleAttemps ({ checkWord, setButtonSendInfo }) {
  const [attemps, setAttemps] = useState(6)
  const [result, setResult] = useState('')
  const [auxCheck, setauxCheck] = useState('')
  useEffect(() => {
    if (checkWord.length > 0) {
      if (checkWord[1] !== undefined) {
        setauxCheck(checkWord[1])
      }
      if (checkWord[0] === 'failed') {
        setAttemps(attemps - 1)
      }
      if (checkWord[0] === 'complete') {
        setResult('Congratulations, you guessed the word!')
        setButtonSendInfo(true)
      }
    }
  }, [checkWord])

  useEffect(() => {
    if (attemps === 0) {
      setResult('You lost! You\'ve run out of tries. The correct word was: ' + auxCheck)
      setButtonSendInfo(true)
    }
  }, [attemps])

  return { attemps, setAttemps, result, setResult }
}
