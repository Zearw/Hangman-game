import { createContext, useState } from 'react'
import { useWord } from '../hooks/useWord'
import { useHiddenWord } from '../hooks/useHiddenWord'
import { useErrorInput } from '../hooks/useError'
import { useHandleInput } from '../hooks/useHandleInput'
import { useHandleAttemps } from '../hooks/useHandleAttemps'
import { useHandleResult } from '../hooks/useHandleResult'

const WordContext = createContext([])

export function WordProvider ({ children }) {
  const [buttonSendInfo, setButtonSendInfo] = useState(false)
  const [inputCheck, setInputCheck] = useState('')
  const { answer, refreshAnswer } = useWord()
  const { hiddenWord, sethiddenWord } = useHiddenWord({ answer })
  const { error, inputUser, setInputUser } = useErrorInput({ hiddenWord })
  const { indices } = useHandleInput({ answer, inputCheck })
  const { attemps, success, setAttemps } = useHandleAttemps({ indices, hiddenWord, sethiddenWord, answer })
  const { result, setResult } = useHandleResult({ attemps, success })

  const reset = async () => {
    refreshAnswer()
    setAttemps(6)
    setResult('')
    setButtonSendInfo(false)
  }

  const configInputUser = (inputUser) => {
    setInputUser(inputUser)
  }

  const modifyInput = (e) => {
    const newInput = e.target.value
    if (newInput.startsWith(' ')) return
    setInputUser(newInput)
  }

  const modifyInputCheck = (e) => {
    e.preventDefault()
    setInputCheck(inputUser)
    setInputUser('')
  }

  const data = {
    inputCheck,
    configInputUser,
    buttonSendInfo,
    hiddenWord,
    modifyInput,
    reset,
    attemps,
    modifyInputCheck,
    inputUser,
    error,
    result
  }

  return (
    <WordContext.Provider value={data}>
      {children}
    </WordContext.Provider>
  )
}

export default WordContext
