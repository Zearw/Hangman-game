import { useEffect } from 'react'

export function useHandleInput ({ answer, inputCheck }) {
  const indices = []
  useEffect(() => {
    if (inputCheck.length > 0) {
      if (inputCheck.length === 1) {
        for (let i = 0; i < answer.length; i++) {
          if (inputCheck === answer[i]) {
            indices.push(i)
          }
        }
        if (indices.length === 0) {
          indices.push('failed')
        }
      } else if (inputCheck.length === answer.length) {
        if (inputCheck === answer) {
          indices.push('complete')
          indices.push(answer)
        } else {
          indices.push('failed')
        }
      }
    }
  }, [inputCheck])

  return { indices }
}
