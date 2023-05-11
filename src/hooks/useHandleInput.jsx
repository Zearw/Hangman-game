import { useEffect } from 'react'

export function useHandleInput ({ answer, inputCheck, hiddenWord, sethiddenWord }) {
  const checkWord = []
  let guess = false

  useEffect(() => {
    if (inputCheck.length > 0) {
      let aux = []
      if (inputCheck.length === 1) {
        for (let i = 0; i < answer.length; i++) {
          if (inputCheck === answer[i] && hiddenWord[i] === '_') {
            aux[i] = inputCheck
            guess = true
          } else {
            aux[i] = hiddenWord[i]
          }
        }
        sethiddenWord(aux)
        if (guess === false) {
          checkWord.push('failed')
          checkWord.push(answer)
        }
      } else if (inputCheck.length === answer.length) {
        if (inputCheck === answer) {
          aux = answer
          sethiddenWord(aux)
          checkWord.push('complete')
        } else {
          checkWord.push('failed')
          checkWord.push(answer)
        }
      }
    }
  }, [inputCheck])

  if (hiddenWord.length > 0 && hiddenWord.includes('_') === false) {
    checkWord.push('complete')
  }
  return { checkWord }
}
