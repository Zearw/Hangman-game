import { useState } from 'react'
import { useAnswer } from './hooks/useAnswer'
import { useHiddenWord } from './hooks/useHiddenWord'

export function App () {
  const [inputUser, setInputUser] = useState('')
  const { answer, refreshAnswer } = useAnswer()
  const { hiddenWord } = useHiddenWord(answer)

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleChange = (event) => {
    const newInput = event.target.value
    setInputUser(newInput)
  }

  return (
    <>
      <header>
        <h1>Juego del ahorcado</h1>
      </header>

      <main>
        <div>
          <h2 style={{ fontSize: ' 54px ' }}>
            {hiddenWord && <p>{hiddenWord}</p>}
          </h2>
        </div>

        <form onSubmit={handleSubmit}>
          <label> Coloque una letra o la palabra entera</label>
          <input
            type='text'
            name='inputUser'
            value={inputUser}
            onChange={handleChange}
          />
          <button type='submit'> Adivinar palabra </button>
        </form>
      </main>
    </>
  )
}
