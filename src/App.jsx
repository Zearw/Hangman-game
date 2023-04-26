import { useWord } from './hooks/useWord'
import { useHiddenWord } from './hooks/useHiddenWord'
import { useErrorInput } from './hooks/useError'
import { useEntry } from './hooks/useEntry'
import './App.css'
import { useState } from 'react'

export function App () {
  const [inputcheck, setInputcheck] = useState('') // Palabra que enviamos al checkeo de palabras
  const [buttonSendInfo, setButtonSendInfo] = useState(false)
  const { answer, refreshAnswer } = useWord() // Palabra correcta sin borrar letras
  const { hiddenWord, sethiddenWord } = useHiddenWord(answer) // La palabra ofuscada
  const { error, inputUser, setInputUser } = useErrorInput({ hiddenWord })
  // Seteo de error en pantalla, usado en el form
  const { result, attemps, setAttemps, setResult } = useEntry({ inputcheck, hiddenWord, answer, sethiddenWord, setButtonSendInfo }) // Informacion del juego.

  const handleSubmit = (event) => {
    event.preventDefault()
    setInputcheck(inputUser)
    setInputUser('')
  }

  const handleChange = (event) => {
    const newInput = event.target.value
    if (newInput.startsWith(' ')) return
    setInputUser(newInput)
  }

  const handleClick = async () => {
    refreshAnswer()
    setAttemps(6)
    setResult('')
    setButtonSendInfo(false)
  }

  return (
    <>
      <header>
        <h1>Juego del ahorcado</h1>
      </header>

      <main>
        <div>
          <h2 style={{ fontSize: ' 54px ' }}>
            {hiddenWord && <p className='guessWord'>{hiddenWord}</p>}
          </h2>
          <button onClick={handleClick}> Cambiar palabra </button>
        </div>
        <div> <p> Intentos restastes {attemps} </p></div>

        <form onSubmit={handleSubmit}>
          <label> Coloque una letra o la palabra entera</label>
          <input
            autoFocus
            type='text'
            name='inputUser'
            value={inputUser}
            onChange={handleChange}
            autoComplete='off'
          />

          <button disabled={buttonSendInfo} type='submit'> Adivinar palabra </button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {result && <p>{result}</p>}
      </main>
    </>
  )
}
