import { useState, useEffect } from 'react'
import { getRandomWord } from '../service/word'

export function useAnswer () {
  const [answer, setAnswer] = useState()

  const refreshAnswer = () => {
    getRandomWord().then(word => setAnswer(word))
  }

  useEffect(refreshAnswer, [])

  return { answer, refreshAnswer }
}
