import { useEffect, useState } from 'react'

export function useEntry ({ inputcheck, hiddenWord, answer, sethiddenWord, setButtonSendInfo }) {
  const [attemps, setAttemps] = useState(6)
  const [result, setResult] = useState('')
  let acerto = false

  useEffect(() => {
    if (attemps === 0) {
      setResult('¡Perdiste! Se te acabaron los intentos. ')
      setButtonSendInfo(true)
    }
  }, [attemps])

  useEffect(() => {
    if (inputcheck.length > 0) {
      if (inputcheck.length === 1) {
        const aux = []
        for (let i = 0; i < answer.length; i++) {
          if (inputcheck === answer[i]) {
            aux[i] = inputcheck
            acerto = true
          } else {
            aux[i] = hiddenWord[i]
          }
        }
        sethiddenWord(aux)
        if (acerto === false) {
          setAttemps(attemps - 1)
        }
      } else if (inputcheck.length === hiddenWord.length) {
        if (inputcheck === answer) {
          sethiddenWord(answer)
          acerto = true
          setResult('¡Felicidades! Acertaste la palabra.')
          setButtonSendInfo(true)
        }
        if (acerto === false) {
          setAttemps(attemps - 1)
        }
      }
    }
  }, [inputcheck])

  return { result, attemps, setAttemps, setResult }
}
