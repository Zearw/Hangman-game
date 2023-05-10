import { useEffect, useState } from 'react'

export function useHandleAttemps ({ indices, hiddenWord, sethiddenWord }) {
  const [attemps, setAttemps] = useState(6)
  let acerto = false
  let success = false

  useEffect(() => {
    if (indices.length > 0) {
      let aux = []
      console.log(indices)
      if (indices[0] === 'complete') {
        success = true
        acerto = true
        aux = indices[1]
        sethiddenWord(aux)
      } else if (indices[0] !== 'complete' && indices[0] !== 'failed') {
        console.log('adentro 2')
        for (let i = 0; i < indices.length; i++) {
          if (hiddenWord[indices[i]] === '_') {
            acerto = true
          }
        }
      } else if (acerto === false || indices[0] === 'failed') {
        setAttemps(attemps - 1)
        console.log('adentro 3')
      }
    }
  }, [indices])

  return { attemps, success, setAttemps }
}
