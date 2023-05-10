import { useState } from 'react'
import { useWord } from '../../hooks/useWord'
import { useEntry } from '../../hooks/useEntry'

export function Buttons (inputcheck) {
  const [buttonSendInfo, setButtonSendInfo] = useState(false)
  const { refreshAnswer } = useWord()
  const { setAttemps, setResult } = useEntry({ setButtonSendInfo, inputcheck })

  const handleClick = async () => {
    refreshAnswer()
    setAttemps(6)
    setResult('')
    setButtonSendInfo(false)
  }

  return (
    <div>
      <button onClick={handleClick}> Cambiar palabra </button>
      <button disabled={buttonSendInfo} type='submit'> Adivinar palabra </button>
    </div>
  )
}
