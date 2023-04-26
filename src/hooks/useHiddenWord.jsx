import { useState, useEffect } from 'react'

export function useHiddenWord (answer) {
  const [hiddenWord, sethiddenWord] = useState('')
  useEffect(() => {
    if (answer) {
      const hiddenRandomWord = []
      const amountHiddenLetters = Math.floor(answer.length * 0.6)
      const hiddenIndex = []
      for (let i = 0; i < amountHiddenLetters; i++) {
        let aux = Math.floor(Math.random() * answer.length)
        while (hiddenIndex.find(e => e === aux) !== undefined) {
          aux = Math.floor(Math.random() * answer.length)
        }
        hiddenIndex[i] = aux
      }
      for (let i = 0; i < answer.length; i++) {
        if (hiddenIndex.find(e => e === i) !== undefined) {
          hiddenRandomWord[i] = '_'
        } else {
          hiddenRandomWord[i] = answer[i]
        }
      }
      const ansStr = hiddenRandomWord.join('')
      sethiddenWord(ansStr)
    }
  }, [answer])
  return { hiddenWord, sethiddenWord }
}
